const { getAddressHistory, getAddressBalance } = require("../util/api.js");

async function addressHandler(request, h) {
  const addressHash = request.params.addressHash;
  let data;
  let balance;
  let page;

  //XXX Wrap pagination variables into one function.
  if (request.query.p) {
    page = parseInt(request.query.p);
  } else {
    page = 1;
  }

  try {
    data = await getAddressHistory(addressHash, page);
    balance = await getAddressBalance(addressHash);
  } catch (e) {
    console.error(e);
  }

  let totalPages = Math.ceil(data.total / data.limit);

  return h.view("address.pug", {
    addressHash,
    txs: data.result,
    balance,
    pagination: {
      url: `address/${addressHash}`,
      page,
      totalPages
    }
  });
}

module.exports = addressHandler;
