const { getClient } = require("../util/clients.js");
const { Address } = require("hsd");
const rules = require("hsd/lib/covenants/rules");

async function searchHandler(request, h) {
  const client = getClient();
  let info = await client.getInfo();
  let txHash = RegExp("^[a-fA-F0-9]{64}$");
  let search = request.query.q;

  let results = [];

  if (!isNaN(search)) {
    //Converts search string to int
    let height = +search;

    let tip = info.chain.height;

    //If it's a feasible block height, redirect to block page.
    if (height <= tip && height >= 0) {
      let result = { type: "Block", url: `/block/${height}` };

      results.push(result);
    }
  }

  if (txHash.test(search)) {
    let result = { type: "Transaction", url: `/tx/${search}` };
    results.push(result);
  }

  let address;

  try {
    address = new Address(search);
  } catch (e) {
    //Do nothing.
  }

  if (address) {
    if (address.isValid()) {
      let result = { type: "Address", url: `/address/${search}` };
      results.push(result);
    }
  }

  let name = search.toLowerCase();
  if (rules.verifyString(name)) {
    let result = { type: "Name", url: `/name/${name}` };
    results.push(result);
  }

  if (results.length === 1) {
    //return the url
    return h.redirect(results[0].url);
  }

  return h.view("search.pug", { results });
}

module.exports = searchHandler;
