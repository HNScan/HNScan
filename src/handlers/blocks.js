const { getBlocks } = require("../api");

const { paginate } = require("../util/util.js");

async function blocksHandler(request, h) {
  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  let blocks;

  try {
    blocks = await getBlocks(limit, offset);
  } catch (e) {
    h.response().code(404);
  }

  let pagination = paginate(blocks[0].height + offset, limit, page, "blocks");

  return h.view("blocks.pug", {
    blocks,
    pagination
  });
}

module.exports = blocksHandler;
