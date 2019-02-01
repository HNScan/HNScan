const { getBlock } = require("../api");

const { paginate } = require("../util/util.js");

async function blockHandler(request, h) {
  const blockNumber = request.params.blockNumber;
  let block;

  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  try {
    block = await getBlock(blockNumber);
  } catch (e) {
    console.log(e);
  }

  let pagination = paginate(
    block.total_txs,
    limit,
    page,
    "block/" + blockNumber
  );

  return h.view("block.pug", {
    block,
    pagination
  });
}

module.exports = blockHandler;
