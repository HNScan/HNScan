const { getClient } = require("../util/clients.js");

const { getBlocks } = require("../util/api.js");

async function blocksHandler(request, h) {
  //XXX handle out of range pages -> Forward them to 404.
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
  let info = await client.getInfo();

  let currentBlock = info.chain.height - offset;
  let totalPages = Math.ceil((info.chain.height + 1) / amount);
  let blocks = [];

  if (currentBlock < 0) {
    return h.response().code(404);
  }

  endBlock = currentBlock - amount;

  if (endBlock < -1) {
    endBlock = -1;
  }

  try {
    blocks = await getBlocks(endBlock, currentBlock);
  } catch (e) {
    h.response().code(404);
  }

  return h.view("blocks.pug", {
    blocks,
    templateName: "blocks",
    pagination: {
      url: "blocks",
      page,
      totalPages
    }
  });
}

module.exports = blocksHandler;
