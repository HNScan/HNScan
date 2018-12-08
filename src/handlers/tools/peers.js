const { getClient } = require("../../util/clients.js");

async function peersHandler(request, h) {
  const client = getClient();
  const peers = await client.execute("getpeerinfo");
  return h.view("peers.pug", { peers });
}

module.exports = peersHandler;
