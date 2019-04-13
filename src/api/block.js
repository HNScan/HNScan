const { getClient, getUrkel } = require("../util/clients.js");

const { formatBlock, checkUrkel } = require("../util/util.js");

const getTXs = require("./txs.js");

/**
 * getBlock - General Wrapper function around get block.
 *
 * @param height - Block Height
 * @param limit=10 - Amount of transactions to return
 * @param offset=0 - Transaction # to start at
 * @returns {Promise<Block>}
 */
async function getBlock(height, limit = 10, offset = 0) {
  let block = checkUrkel("block")
    ? await _getBlockUrkel(height)
    : await _getBlockDaemon(height);

  let txs = block.tx.slice(offset, offset + (limit - 1));

  let txlist = [];

  for (let tx of txs) {
    if (typeof tx == "string") {
      txlist.push(tx);
    } else {
      txlist.push(tx.txid);
    }
  }

  block.txs = await getTXs(txlist);

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
