"use strict";

const assert = require("bsert");
const config = require("config");

const { getUrkel, getClient, getNomenclate } = require("../util/clients.js");

const { checkUrkel, formatTransactions } = require("../util/util.js");

/**
 * getAddress
 *
 * @param addressHash
 * @param limit - # of Transactions to show in history
 * @param offset - # of Txs to Skip. E.g. offset = 50 for page 2 if limit = 50.
 * @returns {undefined}
 */
async function getAddress(hash, limit = 10, offset = 0) {
  if (checkUrkel()) {
    return _getAddressUrkel(hash, limit, offset);
  } else {
    return _getAddressDaemon(hash, limit, offset);
  }
}

async function getAddressUrkel(hash, limit = 10, offset = 0) {
  return null;
}

async function _getAddressDaemon(hash, limit = 10, offset = 0) {
  let address = {
    hash: hash
  };

  //Get history
  let history = await _getAddressHistory(hash, limit, offset);

  address.total_txs = history.total;
  address.txs = history.result;

  //Get Balance
  address.balance = await _getAddressBalance(hash);

  return address;
}

/**
 * _getAddressHistory
 *
 * @param hash
 * @param limit
 * @param offset
 * @returns {Promise}
 */
async function _getAddressHistory(hash, limit = 10, offset = 0) {
  assert(hash);

  const client = getClient();
  const nomenclate = getNomenclate();

  //Declare functionwide vars
  let txs = [];

  let data = await nomenclate.getAddressHistory(hash, limit, offset);

  for (let tx of data.result) {
    let newtx = await client.getTX(tx.tx_hash);

    txs.push(newtx);
  }

  txs = await formatTransactions(txs);

  data.result = txs;

  return data;
}

/**
 * _getAddressBalance
 *
 * @param hash
 * @returns {balance}
 */
async function _getAddressBalance(hash) {
  const nomenclate = getNomenclate();

  //Declare functionwide vars
  let balance = await nomenclate.getAddressBalance(hash);

  return balance;
}

module.exports = getAddress;
