const { getClient } = require("../util/clients.js");

async function txHandler(request, h) {
  const client = getClient();
  const hash = request.params.hash;

  let tx;
  try {
    tx = await client.getTX(hash);
  } catch (e) {
    console.log(e);
  }

  return h.view("tx.pug", { tx });
}

module.exports = txHandler;
