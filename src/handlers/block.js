const { getClient } = require("../util/clients.js");

async function blockHandler(request, h) {
  const client = getClient();
  //This will break if we ever reach 2 billion or so blocks.
  //Not sure of Handshake's exact block timing, but if it were 1 block/minute
  //we would reach this in 1.4 million days.
  //XXX anyway let's maybe just future proof using Bignum.
  const blockNumber = parseInt(request.params.blockNumber);

  let block;
  try {
    block = await client.execute("getblockbyheight", [blockNumber, true, true]);
  } catch (e) {
    console.log(e);
  }

  //Note to self that the block reward is the output of the very first transaction.
  //I think we should put that logic in here because i'm not sure if it might change - as in the reward is split amongst a pool

  console.log(block);
  return h.view("block", { block });
}

module.exports = blockHandler;
