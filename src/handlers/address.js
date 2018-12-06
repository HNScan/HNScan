const { getClient, getNomenclate } = require("../util/clients.js");

const { formatTransactions } = require("../util/util.js");

async function addressHandler(request, h) {
  const client = getClient();
  const nomenclate = getNomenclate();

  const addressHash = request.params.addressHash;
  let txs = [];
  let address = {};
  let data;
  let balance;
  let page;

  if (request.query.p) {
    page = parseInt(request.query.p);
  } else {
    page = 1;
  }

  try {
    data = await nomenclate.getAddressHistory(addressHash, page);
    balance = await nomenclate.getAddressBalance(addressHash);
  } catch (e) {
    console.log(e);
  }

  for (let tx of data.result) {
    let newtx = await client.getTX(tx.tx_hash);

    txs.push(newtx);
  }

  console.log(txs[0]);

  txs = await formatTransactions(txs);

  let totalPages = Math.ceil(data.total / data.limit);

  return h.view("address.pug", {
    address,
    addressHash,
    txs,
    balance,
    pagination: {
      url: `address/${addressHash}`,
      page,
      totalPages
    }
  });
}

module.exports = addressHandler;
