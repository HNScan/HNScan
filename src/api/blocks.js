const { getUrkel, getClient } = require("../util/clients.js");

const { checkUrkel } = require("../util/util.js");

const getBlock = require("./block.js");

const getInfo = require("./info.js");

/**
 * getBlocks
 *
 * @param limit=25 - Amount of Blocks to return
 * @param offset=0 - Height of blocks start start off the tip of the chain.
 * @returns {undefined} */
async function getBlocks(limit = 25, offset = 0) {
  return checkUrkel("blocks")
    ? _getBlocksUrkel(limit, offset)
    : _getBlocksDaemon(limit, offset);
}

/**
 * _getBlocksUrkel
 *
 * @param blocklist - array of block heights
 * @returns {Promise<Block[]>}
 */
async function _getBlocksUrkel(limit, offset) {
  const urkel = getUrkel();

  let blocks;

  try {
    blocks = await urkel.blocks(limit, offset);
  } catch (e) {
    console.log(e);
  }

  return blocks;
}

/**
 * _getBlocksDaemon
 *
 * @param blocklist - array of block heights
 * @returns {Promise<Block[]>}
 */
async function _getBlocksDaemon(limit, offset) {
  let info = await getInfo();

  let start = info.chain.height - offset;

  if (start < 0) {
    throw Error("Invalid start block");
  }

  end = start - limit;

  if (end < -1) {
    end = -1;
  }

  let blocklist = [];

  for (let i = start; i > end; i--) {
    blocklist.push(i);
  }

  let blockcalls = [];

  for (let height of blocklist) {
    let block = getBlock(height);
    blockcalls.push(block);
  }

  let blocks = await Promise.all(blockcalls);

  return blocks;
}

module.exports = getBlocks;
