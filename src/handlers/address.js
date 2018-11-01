const { getClient } = require("../util/clients.js");

async function addressHandler(request, h) {
  const client = getClient();
  const addressHash = request.params.addressHash;
  let addressData = {};

  try {
    addressData.txs = await client.getTXByAddress(addressHash);
  } catch (e) {
    console.log(e);
  }

  return h.view("address", { addressData });
}

module.exports = addressHandler;
