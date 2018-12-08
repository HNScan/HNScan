const { getClient } = require("../util/clients.js");
const { Address } = require("hsd");
const rules = require("hsd/lib/covenants/rules");

async function searchHandler(request, h) {
  const client = getClient();
  let info = await client.getInfo();

  let txHash = RegExp("^[a-fA-F0-9]{64}$");

  let search = request.query.q;

  if (!isNaN(search)) {
    let height = +search;

    let tip = info.chain.height;

    //If it's a feasible block height, redirect to block page.
    if (height <= tip) {
      return h.response(`/block/${height}`).code(200);
    }

    return h.response().code(404);
  }

  if (txHash.test(search)) {
    return h.response(`/tx/${search}`).code(200);
  }

  let address;

  try {
    address = new Address(search);
  } catch (e) {
    //Do nothing.
  }

  if (address) {
    if (address.isValid()) {
      return h.response(`/address/${search}`).code(200);
    }
  }

  if (rules.verifyString(search)) {
    return h.response(`/name/${search}`).code(200);
  }

  return h.response().code(404);
}

module.exports = searchHandler;
