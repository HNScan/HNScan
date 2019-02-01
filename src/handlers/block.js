const { getClient } = require("../util/clients.js");

//Handshake Helpers Functions
const {
  getBlockTotalFees,
  currentBlockReward,
  formatTransactions
} = require("../util/util.js");

async function blockHandler(request, h) {
  let page;
  const amount = 20;
  let totalPages;

  if (request.query.p) {
    page = parseInt(request.query.p);
  } else {
    page = 1;
  }

  //Check if blockNumber is higher than client tip - throw error

  const client = getClient();
  //This will break if we ever reach 2 billion or so blocks.
  //Not sure of Handshake's exact block timing, but if it were 1 block/minute
  //we would reach this in 1.4 million days.
  //XXX anyway let's maybe just future proof using Bignum.
  const blockNumber = parseInt(request.params.blockNumber);

  let offset = (page - 1) * amount;

  let block;
  let txs;
  try {
    block = await client.execute("getblockbyheight", [blockNumber, true, true]);
    block.coinbaseTx = await client.getTX(block.tx[0].txid);
    txsBlock = await client.getBlock(blockNumber);

    //Temporary Hack XXX
    txsBlock.txs[0].height = block.height;

    totalPages = Math.ceil(txsBlock.txs.length / amount);

    if (offset > txsBlock.txs.length) {
      return h.response().code(404);
    }

    txs = await formatTransactions(
      txsBlock.txs.slice(offset, offset + amount)
    );

    block.totalFees = getBlockTotalFees(block.coinbaseTx, block.height);
    block.reward = currentBlockReward(block.height);
    //Cleanup
    delete block.tx;
  } catch (e) {
    console.log(e);
  }

  return h.view("block.pug", {
    block,
    txs,
    pagination: {
      url: `block/${blockNumber}`,
      page,
      totalPages
    }
  });
}

module.exports = blockHandler;
