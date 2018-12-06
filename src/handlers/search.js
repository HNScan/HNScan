const { getClient } = require("../util/clients.js");

async function searchHandler(request, h) {
  const client = getClient();
  let search = request.query.q;

  //TX hash = 64 length

  //Address - regex for TS, SS, RS, HS
  //Check what network is running and change regex search

  //Block

  //Name
}

module.exports = searchHandler;
