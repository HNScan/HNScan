const { getClient, getUrkel } = require("../util/clients.js");

const {
  getBlockTotalFees,
  currentBlockReward,
  formatTransactions,
  checkUrkel
} = require("../util/util.js");

async function getBlock(height) {
  if (checkUrkel()) {
    return _getBlockUrkel(height);
  } else {
    return _getBlockDaemon(height);
  }
}

async function _getBlockDaemon(height) {
  const client = getClient();

  let block = await client.execute("getblockbyheight", [height, true, true]);
  block.coinbaseTx = await client.getTX(block.tx[0].txid);
  txsBlock = await client.getBlock(blockNumber);

  //Temporary Hack XXX
  txsBlock.txs[0].height = block.height;

  if (offset > txsBlock.txs.length) {
    throw Error("Invalid Transaction Array");
  }

  txs = await formatTransactions(
    txsBlock.txs.slice(offset, offset + (amount - 1))
  );

  block.totalFees = getBlockTotalFees(block.coinbaseTx, block.height);
  block.reward = currentBlockReward(block.height);
  //Cleanup
  delete block.tx;

  return block;
}

async function _getBlockUrkel(height) {
  let urkel = getUrkel();

  let block = await urkel.block(height);

  return block;
}

module.exports = getBlock;
