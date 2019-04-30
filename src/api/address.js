"use strict";

const assert = require("bsert");
const config = require("config");

const { getUrkel, getClient, getNomenclate } = require("../util/clients.js");

const { checkUrkel, formatTransactions } = require("../util/util.js");

/**
 * getAddress
 *
 * @param hash - Address hash
 * @param limit - # of Transactions to show in history
 * @param offset - # of Txs to Skip. E.g. offset = 50 for page 2 if limit = 50.
 * @returns {Promise<Address>}
 */
async function getAddress(hash, limit = 10, offset = 0) {
  return checkUrkel("address")
    ? _getAddressUrkel(hash, limit, offset)
    : _getAddressDaemon(hash, limit, offset);
}

/**
 * _getAddressUrkel - Get Address using Urkel APIs
 *
 * @param hash
 * @param limit=10
 * @param offset=0
 * @returns {Promise<Address>}
 */
async function _getAddressUrkel(hash, limit = 10, offset = 0) {
  const urkel = getUrkel();

  let address = await urkel.address(hash, true, limit, offset);

  // for (let i = 0; i < address.txs.length; i++) {
  //   address.txs[i] = await formatTransaction(address.txs[i]);
  // }

  address.txs = await formatTransactions(address.txs);

  return address;
}

/**
 * _getAddressDaemon - Get Address using a local hsd daemon
 *
 * @param hash
 * @param limit=10
 * @param offset=0
 * @returns {Promise<Address>}
 */
async function _getAddressDaemon(hash, limit = 10, offset = 0) {
  let address = {
    hash: hash
  };

  //Get history
  let history = await _getAddressHistory(hash, limit, offset);

  address.totalTxs = history.total;
  address.txs = history.result;

  //Get Balance
  let balance = await _getAddressBalance(hash);

  address.totalReceived = balance.received;
  address.totalSent = balance.spent;
  address.balance = balance.confirmed;

  return address;
}

/**
 * _getAddressHistory - Returns history for a specific address using nomenclate.
 *
 * @param hash - Address Hash
 * @param limit - Number of Records to return
 * @param offset - Record # to start at.
 * @returns {Promise<History>}
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
 * _getAddressBalance - Returns the current balance for an address using nomenclate.
 *
 * @param hash - Address Hash
 * @returns {Promise<Balance>}
 */
async function _getAddressBalance(hash) {
  const nomenclate = getNomenclate();

  //Declare functionwide vars
  let balance = await nomenclate.getAddressBalance(hash);

  return balance;
}

module.exports = getAddress;
