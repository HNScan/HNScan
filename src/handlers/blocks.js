const { getClient } = require("../util/clients.js");

async function blocksHandler(request, h) {
  //XXX handle out of range pages -> Forward them to 404.
  let amount;
  let page;
  // let start;
  // let end;

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

  let block;

  endBlock = currentBlock - amount;

  if (endBlock < -1) {
    endBlock = -1;
  }

  let block1;
  let block2;

  while (currentBlock > endBlock) {
    //Take another check at these options here.
    //We want as little info as possible while still filling out all values.
    try {
      block = await client.execute("getblockbyheight", [
        currentBlock,
        true,
        true
      ]);
      block.coinbaseTx = await client.getTX(block.tx[0].txid);
    } catch (e) {
      console.log(e);
    }

    blocks.push(block);

    currentBlock--;
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
