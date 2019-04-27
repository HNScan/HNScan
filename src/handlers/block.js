const { getBlock } = require("../api");

const { paginate } = require("../util/util.js");

async function blockHandler(request, h) {
  const height = request.params.height;
  let block;

  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  try {
    block = await getBlock(height, limit, offset);
  } catch (e) {
    console.log(e);
  }

  let pagination = paginate(block.totalTxs, limit, page, "block/" + height);

  return h.view("block.pug", {
    block,
    pagination
  });
}

module.exports = blockHandler;
