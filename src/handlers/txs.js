const { getClient } = require("../util/clients.js");

async function txsHandler(request, h) {
  // let amount;
  // let page;

  const client = getClient();

  //   if (request.query.amt) {
  //     amount = request.query.amt;
  //   } else {
  //     amount = 25;
  //   }

  //   if (request.query.p) {
  //     page = request.query.p;
  //   } else {
  //     page = 1;
  //   }

  //   let offset = (page - 1) * amount;
  //   let info = await client.getInfo();

  //   let currentBlock = info.chain.height - offset;
  //   let txns = [];

  //   let block;

  //   endBlock = currentBlock - amount;

  //   while (currentBlock > endBlock) {

  //   let tx;
  //   try {
  //     tx = await client.getTX(hash);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //

  let txs;
  let block;

  if (request.query.block) {
    blockNumber = parseInt(request.query.block);

    let block = await client.getBlock(blockNumber);

    txs = block.txs;
  }

  return h.view("txs", { txs });
}

module.exports = txsHandler;
