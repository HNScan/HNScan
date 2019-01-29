const { calculateProof, parseAddress } = require("../../util/airdrop.js");
const { getClient } = require("../../util/clients.js");

const { AirdropProof } = require("hs-airdrop");

const { Address } = require("hsd");

async function submitclaimHandler(request, h) {
  //Accept a query that is ?confirm=true or something like this.
  //the first one will just for a claim, and the second will process it.

  //If no confirm, search for the values on this person's address.
  //
  //If there is a confirm -> Then trigger fully.
  const address = request.payload.addr;
  const proofstring = request.payload.proof;
  const confirm = request.query.confirm;

  //If confirm is true, then we send the proof to the blockchain
  if (confirm) {
    const client = getClient();

    let proof = AirdropProof.fromBase64(proofstring);

    if (!proof.verify()) {
      return h.response("Invalid Proof").code(400);
    }

    try {
      await client.execute("sendrawairdrop", [proofstring]);
    } catch (e) {
      console.log(e);
    }

    return h.response("Proof Sent!").code(200);
  }

  //Check if address is valid
  try {
    parseAddress(address);
  } catch (e) {
    return h.response("Invalid Address").code(400);
  }

  //Attempt to calculate proof.
  let proof;
  try {
    proof = await calculateProof(address);
  } catch (e) {
    return h.response("Address Not Included in Airdrop").code(400);
  }

  return h.response({ proof }).code(200);
}

module.exports = submitclaimHandler;
