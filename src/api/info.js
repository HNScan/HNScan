const { checkUrkel } = require("../util/util.js");

const { getClient } = require("../util/clients.js");

async function getInfo() {
  return checkUrkel() ? _getInfoUrkel() : _getInfoDaemon();
}

async function _getInfoUrkel() {
  return null;
}

async function _getInfoDaemon() {
  const client = getClient();

  let info = await client.getInfo();

  return info;
}

module.exports = getInfo;
