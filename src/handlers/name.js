const { getClient, getNomenclate } = require("../util/clients.js");
const { formatAuctionHistory } = require("../util/util.js");

async function blockHandler(request, h) {
  const client = getClient();
  const nomenclate = getNomenclate();

  const name = request.params.name;

  let nameData, auctionData;
  let nameHistory = [];
  let nextState = {};
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

    console.log(nameData);
    if (nameData.info.stats) {
      switch (nameData.info.state) {
        case "OPENING":
          nextState.state = "BIDDING";
          nextState.blocksUntil = nameData.info.stats.blocksUntilBidding;
          break;

        case "CLOSED":
          nextState.state = "RENEWAL";
          nextState.blocksUntil = nameData.info.stats.blocksUntilExpire;
          break;
      }
    }

    //Not sure this covers all states, but this works for now.
    if ((nameData.state = "CLOSED")) {
      nameData.records = await client.execute("getnameresource", [name]);
    }
  } catch (e) {
    console.log(e);
  }

  //Revamp the data passed when We pull this to it's own API file XXX
  return h.view("name.pug", {
    name: nameData,
    nextState,
    auction: auctionData,
    history
  });
}

module.exports = blockHandler;
