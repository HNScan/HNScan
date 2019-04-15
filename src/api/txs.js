const { getClient, getUrkel } = require("../util/clients.js");

const { checkUrkel } = require("../util/util.js");

const getTX = require("./tx.js");

/**
 * getTXs
 *
 * @param txlist - Array of Transaction IDs
 * @returns {Promise<TX[]>}
 */
async function getTXs(txlist) {
  return checkUrkel() ? _getTXsUrkel(txlist) : _getTXsDaemon(txlist);
}

/**
 * _getTXsUrkel
 *
 * @param txlist - Array of Transaction IDs
 * @returns {Promise<TX[]>}
 */
async function _getTXsUrkel(txlist) {
  // We are keeping these separate as we will be building a batch API for this for Urkel.
  let txcalls = [];

  for (let hash of txlist) {
    tx = getTX(hash);
    txcalls.push(tx);
  }

  let txs = await Promise.all(txcalls);

  return txs;
}

/**
 * _getTXsDaemon
 *
 * @param txlist - Array of Transaction IDs
 * @returns {Promise<TX[]>}
 */
async function _getTXsDaemon(txlist) {
  let txcalls = [];

  for (let hash of txlist) {
    tx = getTX(hash);
    txcalls.push(tx);
  }

  let txs = await Promise.all(txcalls);

  return txs;
}

module.exports = getTXs;
