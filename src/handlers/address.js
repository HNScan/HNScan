const { getClient } = require("../util/clients.js");

async function addressHandler(request, h) {
  const client = getClient();
  const addressHash = request.params.addressHash;
  let address = {};

  try {
    address.txs = await client.getTXByAddress(addressHash);
  } catch (e) {
    console.log(e);
  }

  return h.view("address", { address });
}

module.exports = addressHandler;
