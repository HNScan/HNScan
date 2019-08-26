const { getClient } = require("../../util/clients.js");
const { paginate } = require("../../util/util.js");

async function peersHandler(request, h) {
  let peersInfo;
  let peers = [];
  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  try {
    let client = getClient();
    peersInfo = await client.execute("getpeerinfo");
  } catch (e) {
    h.response().code(404);
  }

  for (let i = offset; i < offset + limit; i++) {
    if (peersInfo[i]) {
      peers.push(peersInfo[i]);
    }
  }

  let pagination = paginate(peersInfo.length, limit, page, "peers");

  return h.view("peers.pug", {
    peers,
    pagination
  });
}

module.exports = peersHandler;
