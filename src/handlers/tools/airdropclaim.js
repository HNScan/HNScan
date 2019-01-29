const { getClient } = require("../../util/clients.js");
const { AirdropProof } = require("hsd");

async function airdropclaimHandler(request, h) {
  const client = getClient();


  return h.view("airdropclaim.pug");
}

module.exports = airdropclaimHandler;
