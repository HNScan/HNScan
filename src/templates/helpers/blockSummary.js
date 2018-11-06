const { truncateHash, prettyPrintHNS } = require("../../util/util.js");

module.exports = function(blocks) {
  let returnString = "";

  if (blocks.length === 0) {
    return `<div class="emptyStateContainer">
      <div class="emptyStateHeader">No blocks</div>
      <div class="emptyStateSubheader">The chain needs to be built</div>
    </div>`;
  }
  for (block of blocks) {
    let miningAddress = block.coinbaseTx.outputs[0].address;
    returnString += `<div class="cardItemContainer">
      <img src="/img/3d.svg" class="summaryDetailImage" alt="CUBE">Block#: <a href="/block/${
        block.height
      }">${block.height}</a>
      <div class="cardItemDetailContainer">
        <p class="cardItemDetail">Mined By: <span class="tooltip"><a href="/address/${miningAddress}">${truncateHash(
      miningAddress,
      10
    )}</a><span class="tooltiptext">${miningAddress}</span></span></p>
        <p class="cardItemDetail">${block.tx.length} txs in 20 seconds</p>
        <p class="cardItemDetail">Block Reward: ${prettyPrintHNS(
          block.coinbaseTx.outputs[0].value
        )}</p>
      </div>
    </div>`;
  }

  return returnString;
};
