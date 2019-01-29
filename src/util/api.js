const config = require("config");
const assert = require("bsert");
const { getClient, getNomenclate } = require("./clients.js");

const {
  formatTransactions,
  formatName,
  formatAuctionHistory
} = require("../util/util.js");

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

/**
 * getBlocks
 *
 * @param from - block height to start from (Inclusive).
 * @param to - block height to go to (Inclusive).
 * @returns {undefined}
 */
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

async function getName(name) {
  if (config.has("urkel-url")) {
    return _getNameUrkel(name);
  } else {
    return _getNameDaemon(name);
  }
}

async function _getNameUrkel(name) {
  return null;
}

async function _getNameDaemon(name) {
  const client = getClient();

  let data = await client.execute("getnameinfo", [name]);

  data.name = name;

  //Format Next State Data.
  let nameData = formatName(data);

  //Not sure this covers all states, but this works for now.
  if ((nameData.state = "CLOSED")) {
    nameData.records = await client.execute("getnameresource", [name]);
  }

  return nameData;
}

async function getNameHistory(name) {
  if (config.has("urkel-url")) {
    return _getNameHistoryUrkel(name);
  } else {
    return _getNameHistoryDaemon(name);
  }
}

async function _getNameHistoryUrkel(name) {}

async function _getNameHistoryDaemon(name) {
  const nomenclate = getNomenclate();

  data = await nomenclate.getNameHistory(name);

  history = await formatAuctionHistory(name, data.result);

  return history;
}

async function getTX(hash) {
  if (config.has("urkel-url")) {
    return _getTXUrkel(hash);
  } else {
    return _getTXDaemon(hash);
  }
}

async function _getTXUrkel(hash) {
  return null;
}

async function _getTXDaemon(hash) {
  const client = getClient();

  let tx = await client.getTX(hash);

  return tx;
}

module.exports = {
  getAddressBalance: getAddressBalance,
  getAddressHistory: getAddressHistory,
  getBlocks: getBlocks,
  getBlock: getBlock,
  getName: getName,
  getNameHistory: getNameHistory,
  getTX: getTX
};
