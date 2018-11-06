const { getClient } = require("../util/clients.js");

async function namesHandler(request, h) {
  let amount;
  let page;
  const client = getClient();

  if (request.query.amt) {
    amount = parseInt(request.query.amt);
  } else {
    amount = 25;
  }

  if (request.query.p) {
    page = parseInt(request.query.p);
  } else {
    page = 1;
  }

  let offset = (page - 1) * amount;

  let names;
  try {
    names = await client.execute("getnames");
  } catch (e) {
    console.log(e);
  }

  //Sort the names by block height, and then alphabetical.
  //XXX Probably break this out to util.
  names.sort(function(a, b) {
    if (b.height !== a.height) {
      return b.height - a.height;
    }
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
  });

  let returnNames = names.slice(offset, offset + amount);
  let totalPages = Math.ceil((names.length + 1) / amount);

  return h.view("names", {
    names: returnNames,
    templateName: "names",
    pagination: {
      url: "names",
      page,
      nextPage: page + 1,
      previousPage: page - 1,
      twoFromLastPage: totalPages - 2,
      almostLastPage: totalPages - 1,
      lastPage: totalPages,
      amount
    }
  });
}

module.exports = namesHandler;
