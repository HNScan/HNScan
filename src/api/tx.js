const { checkUrkel, formatTransaction } = require("../util/util.js");

const { getClient, getUrkel } = require("../util/clients.js");

/**
 * getTX - Returns a formatted transaction from Urkel or the Daemon depending on the env.
 *
 * @param hash - Transaction Hash
 * @returns {Promise<TX>}
 */
async function getTX(hash) {
  return checkUrkel() ? _getTXUrkel(hash) : _getTXDaemon(hash);
}

/**
 * _getTXUrkel - Returns a formatted transaction from the Urkel API.
 *
 * @param hash - Transaction Hash
 * @returns {Promise<TX>}
 */
async function _getTXUrkel(hash) {
  const urkel = getUrkel();

  let tx = await urkel.tx(hash);

  tx = await formatTransaction(tx);

  return tx;
}

/**
 * _getTXDaemon - Returns a formatted transaction from the daemon.
 *
 * @param hash - Transaction Hash
 * @returns {Promise<TX>}
 */
async function _getTXDaemon(hash) {
  const client = getClient();

  let tx = await client.getTX(hash);

  tx = await formatTransaction(tx);

  return tx;
}

module.exports = getTX;
