const { truncateHash } = require("../../util/util.js");
const humanizeDuration = require("humanize-duration");

module.exports = function(txs) {
  let returnString = "";

  if (txs.length === 0) {
    return `<div class="emptyStateContainer">
      <div class="emptyStateHeader">No Transactions</div>
      <div class="emptyStateSubheader">The chain needs to be built</div>
    </div>`;
  }

  for (tx of txs) {
    returnString += `<div class="cardItemContainer">
          <img src="/img/right-arrow.svg" class="summaryDetailImage" alt="arrow">TX#: <a href="/tx/${
            tx.hash
          }">${truncateHash(tx.hash, 6)}</a>
          <p class="is-pulled-right">&gt;${humanizeDuration(
            Date.now() - tx.time * 1000,
            { largest: 1, round: true }
          )} ago</p>
          <div class="cardItemDetailContainer-R">`;

    // The first transaction will always be the mining reward
    // and thus doesn't need a "From" field
    // TODO this needs fixing...
    if (tx.inputs[0].coin) {
      returnString += `<p class="cardItemDetail">From: <a href="/address/${
        tx.inputs[0].address
      }">${truncateHash(tx.inputs[0].address, 5)}</a></p>&nbsp;`;
    }

    returnString += `<p class="cardItemDetail"><span class="tooltip">To: <a href="/address/${
      tx.outputs[0].address
    }">${truncateHash(tx.outputs[0].address, 5)}</a>
    <span class="tooltiptext">${tx.outputs[0].address}</span></span></p>
          </div>
          <p class="cardItemDetailContainer cardItemDetail">Amount: ${tx
            .outputs[0].value / 1000000}HNS</p>
        </div>`;
  }

  return returnString;
};
