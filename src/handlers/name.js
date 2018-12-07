const { getClient, getNomenclate } = require("../util/clients.js");
const { formatAuctionHistory } = require("../util/util.js");

async function blockHandler(request, h) {
  const client = getClient();
  const nomenclate = getNomenclate();

  const name = request.params.name;

  let nameData, auctionData;
  let nameHistory = [];
  try {
    nameData = await client.execute("getnameinfo", [name]);
    data = await nomenclate.getNameHistory(name);

    history = await formatAuctionHistory(name, data.result);

    if (!nameData.info) {
      // XXX anything for auctions?
      auctionData = {};
      auctionData.name = name;
    }

    //See: https://github.com/handshake-org/hsd/issues/74
    if (nameData.info && nameData.info.value === 0) {
      nameData.info.value = nameData.info.highest;
    }

    //Not sure this covers all states, but this works for now.
    if ((nameData.state = "CLOSED")) {
      nameData.records = await client.execute("getnameresource", [name]);
    }
  } catch (e) {
    console.log(e);
  }

  return h.view("name.pug", { name: nameData, auction: auctionData, history });
}

module.exports = blockHandler;
