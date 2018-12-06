const { getClient } = require("../util/clients.js");
const { namesRegistered } = require("../util/util.js");

async function homeHandler(request, h) {
  const client = getClient();
  const info = await client.getInfo();

  // blockSummary
  let blockHeight = info.chain.height;
  let blocks = [];
  var block;

  for (var i = 0; i < Math.min(5, blockHeight); i++) {
    try {
      block = await client.execute("getblockbyheight", [
        blockHeight - i,
        true,
        true
      ]);
      block.coinbaseTx = await client.getTX(block.tx[0].txid);
      blocks.push(block);
    } catch (e) {
      console.log(e);
    }
  }
  // end blockSummary

  //txSummary
  //Iterate through the lastest blocks, grab every transaction until you hit 4
  let transactions = [];
  let transaction;
  block = null;
  var i = 0;
  while (transactions.length <= 4 && i !== blockHeight) {
    try {
      block = await client.execute("getblockbyheight", [
        blockHeight - i,
        true,
        true
      ]);
      for (el of block.tx) {
        if (transactions.length <= 4) {
          transaction = await client.getTX(el.txid);
          transactions.push(transaction);
        }
      }
    } catch (e) {
      console.log(e);
    }
    i++;
  }
  //end txSummary

  // Hashrate
  let miningInfo = await client.execute("getmininginfo");
  let hashrate = miningInfo.networkhashps;

  //Unconfirmed Transactions
  let memPoolInfo = await client.execute("getmempoolinfo");
  let unconfirmedTxs = memPoolInfo.size;
  let txsSizeB = memPoolInfo.bytes;

  //Network
  let serverInfo = await client.getInfo();
  let network = serverInfo.network;

  //Names Registered
  let names = await namesRegistered();
  let registeredNames = names.length;

  //Blockchain Info
  let chainInfo = await client.execute("getblockchaininfo");
  let chainwork = parseInt("0x" + chainInfo.chainwork);

  let difficulty = chainInfo.difficulty;

  return h.view("home.pug", {
    blocks,
    chainwork,
    difficulty,
    hashrate,
    network,
    registeredNames,
    transactions,
    txsSizeB,
    unconfirmedTxs
  });
}

module.exports = homeHandler;
