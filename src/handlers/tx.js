const { getTX } = require("../api");

async function txHandler(request, h) {
  const hash = request.params.hash;

  let tx;
  try {
    tx = await getTX(hash);
  } catch (e) {
    console.log(e);
  }

  return h.view("tx.pug", { tx });
}

module.exports = txHandler;
