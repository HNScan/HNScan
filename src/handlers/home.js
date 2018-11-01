const { getClient } = require("../util/clients.js");
const { formatLargeNumber } = require("../util/util.js");

async function homeHandler(request, h) {
  const client = getClient();
  const info = await client.getInfo();

  // blockSummary
  let blockHeight = info.chain.height;
  let blocks = [];
  var block;

  for (var i = 0; i < Math.min(3, blockHeight); i++) {
    try {
      block = await client.execute("getblockbyheight", [
        blockHeight - i,
        true,
        true
      ]);
      blocks.push(block);
    } catch (e) {
      console.log(e);
    }
  }
  // end blockSummary

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
    txsSizeMB,
    unconfirmedTxs,
    templateName: "home"
  });
}

module.exports = homeHandler;
