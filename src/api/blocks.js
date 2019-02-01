const { getUrkel, getClient } = require("../util/clients.js");

const { checkUrkel } = require("../util/util.js");

const { getBlock } = require("./index.js");

async function getBlocks(limit = 25, offset = 0) {
  if (checkUrkel()) {
    return _getBlocksUrkel(limit, offset);
  } else {
    return _getBlocksDaemon(limit, offset);
  }
}

async function _getBlocksUrkel(limit = 25, offset = 0) {
  const urkel = getUrkel();

  let blocks = await urkel.blocks(limit, offset);

  return blocks;
}

async function _getBlocksDaemon(limit = 25, offset = 0) {
  const client = getClient();

  let info = await client.getInfo();

  let start = info.chain.height - offset;

  if (start < 0) {
    throw Error("Invalid start block");
  }

  end = start - limit;

  if (end < -1) {
    end = -1;
  }

  let blocks = [];

  for (let i = to; i > from; i--) {
    let block;
    try {
      block = getBlock(i);
    } catch (e) {
      console.log(e);
    }

    blocks.push(block);
  }

  let newblocks = await Promise.all(blocks);

  return newblocks;
}
