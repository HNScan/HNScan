const { getClient, getNomenclate } = require("../../util/clients.js");
const { Network, Address } = require("hsd");

async function airdropHandler(request, h) {
  const client = getClient();
  const nomenclate = getNomenclate();

  let info;

  try {
    info = await client.getInfo();
  } catch (e) {
    console.log(e);
  }

  let network = Network.get(info.network);
  let airdropKey = network.keys.airdrop;

  const airdropAddr = Address.fromHash(airdropKey, 0);
  let balance;
  let history;
  try {
    balance = await nomenclate.getAddressBalance(
      airdropAddr.toString(info.network)
    );

    history = await nomenclate.getAddressHistory(
      airdropAddr.toString(info.network)
    );
  } catch (e) {
    console.log(e);
  }

  const original = balance.received;
  const spent = balance.spent;

  //Let's make sure to modulo this to .01 at the lowest %
  const percentClaimed = ((spent / original) * 100).toFixed(4);

  //Total Claimers = the number of transactions minus 1 (the funding tx)
  const totalClaimers = history.total - 1;

  //From: https://github.com/handshake-org/hs-airdrop/blob/master/etc/tree.json
  //Leaves + the "participants" in the faucet.json file.
  const CLAIMERS = 204758;

  const remainingClaimers = CLAIMERS - totalClaimers;

  let airdrop = {
    remaining: balance.confirmed,
    totalClaimed: spent,
    percentClaimed,
    totalClaimers,
    remainingClaimers
  };

  return h.view("airdrop.pug", airdrop);
}

module.exports = airdropHandler;
