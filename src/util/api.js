const config = require("config");
const assert = require("bsert");
const { getClient, getNomenclate } = require("./clients.js");

const { formatTransactions } = require("../util/util.js");

/**
 * getAddressHistory
 *
 * @param addressHash
 * @param page
 * @returns {async function}
 */
async function getAddressHistory(addressHash, page) {
  assert(addressHash);
  assert(page);

  //Check if Urkel is enabled in the config.
  if (config.has("urkel-url")) {
    return _getAddressHistoryUrkel(addressHash, page);
  } else {
    return _getAddressHistoryDaemon(addressHash, page);
  }
}

/**
 * _getAddressHistoryUrkel
 *
 * @param addressHash
 * @param page
 * @returns {data} - Transaction Data from the Urkel API.
 */
async function _getAddressHistoryUrkel(addressHash, page) {
  return null;
}

/**
 * _getAddressHistoryDaemon
 *
 * @param addressHash
 * @param page
 * @returns {data} - Transaction Data from the Daemon and Nomenclate.
 */
async function _getAddressHistoryDaemon(addressHash, page) {
  const client = getClient();
  const nomenclate = getNomenclate();

  //Declare functionwide vars
  let txs = [];

  let data = await nomenclate.getAddressHistory(addressHash, page);

  for (let tx of data.result) {
    let newtx = await client.getTX(tx.tx_hash);

    txs.push(newtx);
  }

  txs = await formatTransactions(txs);

  data.result = txs;

  return data;
}

async function getAddressBalance(addressHash) {
  const nomenclate = getNomenclate();

  //Declare functionwide vars
  let balance;

  try {
    balance = await nomenclate.getAddressBalance(addressHash);
  } catch (e) {
    console.log(e);
  }

  return balance;
}

module.exports = {
  getAddressBalance: getAddressBalance,
  getAddressHistory: getAddressHistory
};
