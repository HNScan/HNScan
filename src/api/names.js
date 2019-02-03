const { checkUrkel } = require("../util/util.js");

const { getClient } = require("../util/clients.js");

async function getNames(limit = 25, offset = 0) {
  return checkUrkel()
    ? _getNamesUrkel(limit, offset)
    : _getNamesDaemon(limit, offset);
}

async function _getNamesUrkel(limit = 25, offset = 0) {
  return null;
}

async function _getNamesDaemon(limit = 25, offset = 0) {
  let client = getClient();

  let names = await client.execute("getnames");

  names.sort(function(a, b) {
    if (b.height !== a.height) {
      return b.height - a.height;
    }
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
  });

  let returnNames = names.slice(offset, offset + limit);

  return {
    total: names.length,
    result: returnNames
  };
}

module.exports = getNames;
