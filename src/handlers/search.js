const { getClient } = require("../util/clients.js");

async function searchHandler(request, h) {
  const client = getClient();
  console.log(request.query.q);

  return h.response(200);
}

module.exports = searchHandler;
