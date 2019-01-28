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

/**
 * getAddressBalance
 *
 * @param addressHash
 * @returns {async function}
 */
async function getAddressBalance(addressHash) {
  assert(addressHash);

  //Check if Urkel is enabled in the config.
  if (config.has("urkel-url")) {
    return _getAddressBalanceUrkel(addressHash);
  } else {
    return _getAddressBalanceDaemon(addressHash);
  }
}

/**
 * _getAddressBalanceUrkel
 *
 * @param addressHash
 * @returns {balance}
 */
async function _getAddressBalanceUrkel(addressHash) {
  return null;
}

/**
 * _getAddressBalanceDaemon
 *
 * @param addressHash
 * @returns {balance}
 */
async function _getAddressBalanceDaemon(addressHash) {
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

async function getBlocks(from, to) {
  assert(from < to);
  assert(from >= -1);

  let blocks = [];

  //Flip so that blocks return in the correct order
  for (let i = to; i > from; i--) {
    let block = await getBlock(i);

    blocks.push(block);
  }

  return blocks;
}

async function getBlock(height) {
  if (config.has("urkel-url")) {
    return _getBlockUrkel(height);
  } else {
    return _getBlockDaemon(height);
  }
}

async function _getBlockDaemon(height) {
  const client = getClient();

  let block = await client.execute("getblockbyheight", [height, true, true]);
  block.coinbaseTx = await client.getTX(block.tx[0].txid);

  return block;
}

async function _getBlockUrkel(height) {}

module.exports = {
  getAddressBalance: getAddressBalance,
  getAddressHistory: getAddressHistory,
  getBlocks: getBlocks,
  getBlock: getBlock
};
