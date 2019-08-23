const { getClient } = require("../../util/clients.js");
const { paginate } = require("../../util/util.js");

async function peersHandler(request, h) {
  let client;
  let peersInfo;
  let peers = [];
  //TODO: this needs to change to 10/page when it is working
  let limit = 3;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  try {
    client = getClient();
    peersInfo = await client.execute("getpeerinfo");
  } catch (e) {
    h.response().code(404);
  }

  for (let i = offset; i < offset + limit; i++) {
    if (peersInfo[i]) {
      peers.push(peersInfo[i]);
    }
  }

  //TODO: The pagination is broken at the moment
  let pagination = paginate(peers[0] + offset, limit, page, "peers");

  return h.view("peers.pug", { peers });
}

module.exports = peersHandler;
