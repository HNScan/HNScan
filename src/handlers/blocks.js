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
      // block = await client.execute("getblockbyheight", [
      //   currentBlock,
      //   true,
      //   true
      // ]);
      block = await client.getBlock(currentBlock);
      block1 = await client.execute("getblockbyheight", [
        currentBlock,
        true,
        true
      ]);
    } catch (e) {
      console.log(e);
    }

    blocks.push(block);

    currentBlock--;
  }

  console.log(blocks[blocks.length - 1]);

  console.log(block1.tx[0].hash);
  console.log(block1.tx[0].txid);

  let coinbaseTx = await client.getTX(block1.tx[0].txid);

  console.log(coinbaseTx);
  console.log(coinbaseTx.outputs);

  return h.view("blocks", {
    blocks,
    templateName: "blocks",
    pagination: {
      url: "blocks",
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

module.exports = blocksHandler;
