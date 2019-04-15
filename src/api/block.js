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
  return checkUrkel("block")
    ? await _getBlockUrkel(height, limit, offset)
    : await _getBlockDaemon(height, limit, offset);
}

/**
 * _getBlockDaemon - Returns a block from the Daemon.
 *
 * @param height - Block Height
 * @param limit - Limit of Transactions to be included
 * @param offset - Offset for transactions to be included
 * @returns {Promise<Block>}
 */
async function _getBlockDaemon(height, limit, offset) {
  const client = getClient();

  let block = await client.execute("getblockbyheight", [height, true, true]);

  block = await formatBlock(block);

  let txs = block.tx.slice(offset, offset + (limit - 1));

  let txlist = [];

  for (let tx of txs) {
    if (typeof tx == "string") {
      txlist.push(tx);
    } else {
      txlist.push(tx.txid);
    }
  }

  block.tx = await getTXs(txlist);

  return block;
}

/**
 * _getBlockUrkel - Returns a block from the Urkel API.
 *
 * @param height - Block Height
 * @param limit - Limit of Transactions to be included
 * @param offset - Offset for transactions to be included
 * @returns {Promise<Block>}
 */
async function _getBlockUrkel(height, limit = 10, offset = 0) {
  let urkel = getUrkel();

  let block = await urkel.block(height, limit, offset);

  return block;
}

module.exports = getBlock;
