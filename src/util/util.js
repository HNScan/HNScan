const { getClient } = require("./clients.js");
const Covenant = require("hsd/lib/primitives/covenant");
const rules = require("hsd/lib/covenants/rules");
const config = require("config");

function currentBlockReward(blockHeight) {
  //Block Reward starts at 1000, and halves every 340000 blocks

  //XXX Double check math on this
  //Block halvening is 5000 blocks on Regtest
  let exponent = Math.floor(blockHeight / 340000);

  let blockReward = 1000 / Math.pow(2, exponent);

  //Need to convert back to HNS
  return blockReward * 1000000;
}

//XXX Convert all of this to Bignum
function getBlockTotalFees(coinbaseTx, blockHeight) {
  if (coinbaseTx == null) {
    return 0;
  }

  var blockReward = currentBlockReward(blockHeight);

  let totalOutput = 0;

  for (let output of coinbaseTx.outputs) {
    totalOutput += output.value;
  }

  let totalFees = totalOutput - blockReward;
  return totalFees;
}

function _formatName(nameHex) {
  var str = "";
  for (var i = 0; i < nameHex.length; i += 2)
    str += String.fromCharCode(parseInt(nameHex.substr(i, 2), 16));
  return str;
}

async function _formatInputs(inputs, height) {
  let newInputs = [];
  let client = getClient();

  //XXX Does not work for airdrops right now.
  for (let input of inputs) {
    if (!input.coin) {
      input.reward = currentBlockReward(height);
    }

    newInputs.push(input);
  }

  return newInputs;
}

async function _formatOutputs(outputs) {
  let newOutputs = [];
  let client = getClient();

  for (let output of outputs) {
    let newOutput = {};
    //Declare vars for loop
    let items = output.covenant.items;
    let action = output.covenant.action;

    //Add initial to output
    newOutput.action = action;
    newOutput.address = output.address;

    //XXX We need to understand what the address represents in the case of a OPEN or a BID - there might be a special way we can represent this on the address page.
    switch (action) {
      case "NONE":
        newOutput.value = output.value;
        break;

      case "OPEN":
        newOutput.name = _formatName(items[2]);
        break;

      case "BID":
        //XXX Need to decode start height
        newOutput.startHeight = items[1];
        newOutput.name = _formatName(items[2]);
        newOutput.value = output.value;
        break;

      case "REVEAL":
        //XXX Need to decode start height
        newOutput.startHeight = items[1];
        newOutput.nonce = items[2];
        newOutput.value = output.value;
        break;

      case "REDEEM":
        console.log(items);
        break;

      //Finish cases, add some tests for these.
      // case "REGISTER":
    }

    if (action != "NONE") {
      //XXX convert hash to actual name.
      newOutput.nameHash = items[0];

      if (!newOutput.name) {
        newOutput.name = await client.execute("getnamebyhash", [
          newOutput.nameHash
        ]);
      }
    }

    newOutputs.push(newOutput);
  }

  return newOutputs;
}

//Function to format transactions splits into outputs and inputs
async function formatTransactions(txs) {
  for (let tx of txs) {
    tx.outputs = await _formatOutputs(tx.outputs);
    tx.inputs = await _formatInputs(tx.inputs, tx.height);
  }

  return txs;
}

async function formatTransaction(tx) {
  //XXX I feel like these don't need to be awaits...
  tx.outputs = await _formatOutputs(tx.outputs);

  tx.inputs = await _formatInputs(tx.inputs, tx.height);

  return tx;
}

async function formatAuctionHistory(name, txs) {
  let client = getClient();

  //Get the name hash for matching.
  let nameHash = rules.hashName(name).toString("hex");

  let history = [];

  //XXX Double check - but I believe that all name actions will be outputs
  for (let tx of txs) {
    let fulltx = await client.getTX(tx.tx_hash);
    for (let o of fulltx.outputs) {
      let newtx = {};
      let cov = new Covenant(o.covenant.type, o.covenant.items);

      if (cov.isName()) {
        if (cov.get(0) === nameHash) {
          if (cov.isOpen()) {
            newtx.action = "Opened";
          }

          if (cov.isBid()) {
            newtx.action = "Bid";
            newtx.value = o.value;
          }

          if (cov.isReveal()) {
            //See if we can connect Reveals to Bids using the nonce.
            newtx.action = "Reveal";
            newtx.value = o.value;
          }

          //XXX Add owner information to this.
          //See if this is called on a transfer as well.
          if (cov.isRegister()) {
            //Link to the data on a new page.
            newtx.action = "Register";
          }

          if (cov.isRedeem()) {
            //Redeem non winning bids?
            //Possibly also connect these to reveals and bids.
            newtx.action = "Redeem";
            newtx.value = o.value;
          }

          if (cov.isUpdate()) {
            //Link data on new page
            newtx.action = "Update";
          }

          if (cov.isRenew()) {
            newtx.action = "Renew";
          }

          newtx.time = fulltx.mtime;
          newtx.height = fulltx.height;

          history.push(newtx);
        }
      }
    }
  }

  return history;
}

async function namesRegistered() {
  let client = getClient();
  let names;

  try {
    //Convert this to a DB action for v3.
    //Although we should probably have both options available.
    //If DB -> Do db version -> If not -> run this.
    names = await client.execute("getnames");
  } catch (e) {
    console.log(e);
  }

  let namesClosed = names.filter(function(value, index, arr) {
    return value.state === "CLOSED";
  });

  return namesClosed;
}

function formatName(name) {
  //See: https://github.com/handshake-org/hsd/issues/74
  //XXX Submit P.R. To fix this.
  if (name.info && name.info.value === 0) {
    name.info.value = name.info.highest;
  }

  name.nextState = formatNameNextState(name);

  return name;
}

function formatNameNextState(name) {
  let nextState = {};

  if (name.info) {
    switch (name.info.state) {
      case "OPENING":
        nextState.state = "BIDDING";
        nextState.blocksUntil = name.info.stats.blocksUntilBidding;
        break;

      case "BIDDING":
        nextState.state = "REVEAL";
        nextState.blocksUntil = name.info.stats.blocksUntilReveal;
        break;

      case "REVEAL":
        nextState.state = "CLOSED";
        nextState.blocksUntil = name.info.stats.blocksUntilClose;
        break;

      case "CLOSED":
        nextState.state = "RENEWAL";
        nextState.blocksUntil = name.info.stats.blocksUntilExpire;
        break;
    }
  } else {
    //Check if name is released or not. If it is, then change it's state.
    nextState.state = "AVAILABLE";
  }

  return nextState;
}

function checkUrkel(feature) {
  if (config.has("urkel-features")) {
    if (config.get("urkel-features").includes(feature)) {
      return true;
    }
    return null;
  } else {
    return null;
  }
}

function paginate(total, limit, page, url) {
  return (pagination = {
    url: url,
    page: page,
    totalPages: Math.ceil(total / limit)
  });
}

async function formatBlock(block) {
  let client = getClient();

  let coinbaseTx = await client.getTX(block.tx[0].txid);
  block.minedBy = coinbaseTx.outputs[0].address;
  block.totalTxs = block.tx.length;
  block.fees = getBlockTotalFees(coinbaseTx, block.height);
  block.reward = currentBlockReward(block.height);

  return block;
}

module.exports = {
  getBlockTotalFees: getBlockTotalFees,
  currentBlockReward: currentBlockReward,
  formatTransactions: formatTransactions,
  formatAuctionHistory: formatAuctionHistory,
  namesRegistered: namesRegistered,
  formatNameNextState: formatNameNextState,
  formatName: formatName,
  checkUrkel: checkUrkel,
  paginate: paginate,
  formatBlock: formatBlock,
  formatTransaction: formatTransaction
};
