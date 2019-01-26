const { AirdropKey, AirdropProof } = require("hs-airdrop");

async function submitclaimHandler(request, h) {
  //Accept a query that is ?confirm=true or something like this.
  //the first one will just for a claim, and the second will process it.

  //If no confirm, search for the values on this person's address.
  //
  //If there is a confirm -> Then trigger fully.
  console.log(request.payload.addr);
  const address = request.payload.addr;

  key = {
    type: "addr",
    pub: AirdropKey.fromAddress(address, 0, false),
    priv: null
  };

  console.log(key);

  return h.response().code(200);
}

module.exports = submitclaimHandler;
