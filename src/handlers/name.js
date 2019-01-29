const { formatAuctionHistory } = require("../util/util.js");

const { getName, getNameHistory } = require("../util/api.js");

async function blockHandler(request, h) {
  const name = request.params.name;

  let nameData = await getName(name);
  let history = await getNameHistory(name);

  return h.view("name.pug", {
    name: nameData,
    history
  });
}

module.exports = blockHandler;
