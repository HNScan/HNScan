const { getClient } = require("./clients.js");
const rules = require("hsd/lib/covenants/rules");
const Covenant = require("hsd/lib/primitives/covenant");

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

async function formatAuctionHistory(name, txs) {
  let client = getClient();

  //Get the name hash for matching.
  let nameHash = rules.hashName(name).toString("hex");

  let history = [];

  console.log(nameHash);

  //XXX Double check - but I believe that all name actions will be outputs
  for (let tx of txs) {
    let fulltx = await client.getTX(tx.tx_hash);
    console.log(fulltx.inputs);
    console.log(fulltx.inputs[0].coin.covenant);
    console.log(fulltx.outputs);
    for (let o of fulltx.outputs) {
      let cov = new Covenant(o.covenant.type, o.covenant.items);

      if (cov.isName()) {
        if (cov.get(0) === nameHash) {
          history.push(fulltx);
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

module.exports = {
  getBlockTotalFees: getBlockTotalFees,
  currentBlockReward: currentBlockReward,
  formatTransactions: formatTransactions,
  formatAuctionHistory: formatAuctionHistory,
  namesRegistered: namesRegistered
};
