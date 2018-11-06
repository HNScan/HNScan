const { getClient } = require("../util/clients.js");
const { formatLargeNumber } = require("../util/util.js");

async function homeHandler(request, h) {
  const client = getClient();
  const info = await client.getInfo();

  // blockSummary
  let blockHeight = info.chain.height;
  let blocks = [];
  var block;

  for (var i = 0; i < Math.min(4, blockHeight); i++) {
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
        transaction = await client.getTX(el.txid);
        transactions.push(transaction);
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
  let txsSizeMB = memPoolInfo.bytes / 1000000;

  //Network
  let serverInfo = await client.getInfo();
  let network = serverInfo.network;

  //Blockchain Info
  let chainInfo = await client.execute("getblockchaininfo");
  let chainworkDecimal = formatLargeNumber(
    parseInt("0x" + chainInfo.chainwork),
    3
  );
  let chainwork = chainworkDecimal[0];
  let chainworkExponent = chainworkDecimal[1].exponent;

  let difficultyDecimal = formatLargeNumber(chainInfo.difficulty, 3);
  let difficulty = difficultyDecimal[0];
  let difficultyExponent = difficultyDecimal[1].exponent;

  return h.view("home", {
    blocks,
    chainwork,
    chainworkExponent,
    difficulty,
    difficultyExponent,
    hashrate,
    network,
    transactions,
    txsSizeMB,
    unconfirmedTxs,
    templateName: "home"
  });
}

module.exports = homeHandler;
