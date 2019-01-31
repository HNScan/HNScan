const { getAddress } = require("../api");

async function addressHandler(request, h) {
  const addressHash = request.params.addressHash;
  let page;
  let address;

  //XXX Wrap pagination variables into one function.
  if (request.query.p) {
    page = parseInt(request.query.p);
  } else {
    page = 1;
  }

  try {
    address = await getAddress(addressHash, 10, page);
  } catch (e) {
    console.error(e);
  }

  let totalPages = Math.ceil(address.total_txs / 10);

  return h.view("address.pug", {
    address,
    pagination: {
      url: `address/${addressHash}`,
      page,
      totalPages
    }
  });
}

module.exports = addressHandler;
