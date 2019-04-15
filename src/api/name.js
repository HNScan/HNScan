const { getClient, getUrkel, getNomenclate } = require("../util/clients.js");

const {
  checkUrkel,
  formatName,
  formatAuctionHistory
} = require("../util/util.js");

/**
 * getName
 *
 * @param name - String formatted name
 * @returns {Promise<Name>}
 */
async function getName(name, limit = 20, offset = 0) {
  return checkUrkel()
    ? _getNameUrkel(name, limit, offset)
    : _getNameDaemon(name, limit, offset);
}

/**
 * _getNameUrkel
 *
 * @param name - String formatted name
 * @returns {Promise<Name>}
 */
async function _getNameUrkel(name, limit = 20, offset = 0) {
  return null;
}

/**
 * _getNameDaemon
 *
 * @param name - String formatted name
 * @returns {Promise<Name>}
 */
async function _getNameDaemon(namestring, limit = 20, offset = 0) {
  const client = getClient();

  let name = await client.execute("getnameinfo", [namestring]);

  name.name = namestring;

  //Format Next State Data.
  name = formatName(name);

  //Not sure this covers all states, but this works for now.
  if ((name.state = "CLOSED")) {
    name.records = await client.execute("getnameresource", [namestring]);
  }

  name = await getNameHistory(name, limit, offset);

  return name;
}

async function getNameHistory(name, limit = 20, offset = 0) {
  const nomenclate = getNomenclate();

  let data = await nomenclate.getNameHistory(name.name, limit, offset);

  name.history = await formatAuctionHistory(name.name, data.result);

  name.total_txs = data.total;

  return name;
}

module.exports = getName;
