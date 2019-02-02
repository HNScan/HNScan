const { getClient, getUrkel } = require("../util/clients.js");

const { formatBlock, checkUrkel } = require("../util/util.js");

const { getTXs } = require("./index.js");

/**
 * getBlock - General Wrapper function around get block.
 *
 * @param height - Block Height
 * @param limit=10 - Amount of transactions to return
 * @param offset=0 - Transaction # to start at
 * @returns {Promise<Block>}
 */
async function getBlock(height, limit = 10, offset = 0) {
  let block;

  if (checkUrkel()) {
    block = _getBlockUrkel(height);
  } else {
    block = _getBlockDaemon(height, limit, offset);
  }

  let txList = block.tx.slice(offset, offset + (limit - 1));

  block.txs = await getTXs(txList);

  delete block.tx;

  return block;
}

/**
 * _getBlockDaemon - Returns a block from the Daemon.
 *
 * @param height - Block Height
 * @returns {Promise<Block>}
 */
async function _getBlockDaemon(height) {
  const client = getClient();

  let block = await client.execute("getblockbyheight", [height, true, true]);

  block = await formatBlock(block);

  return block;
}

/**
 * _getBlockUrkel - Returns a block from the Urkel API.
 *
 * @param height - Block Height
 * @returns {Promise<Block>}
 */
async function _getBlockUrkel(height) {
  let urkel = getUrkel();

  let block = await urkel.block(height);

  return block;
}

module.exports = getBlock;
