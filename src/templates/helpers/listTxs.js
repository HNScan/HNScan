const { truncateHash } = require("../../util/util.js");

module.exports = function(txs) {
  let returnString = "";

  for (tx of txs) {
    returnString += `<tr><td><span class="tooltip"><a class="minerLinks" href="/tx/${
      tx.hash
    }">${truncateHash(tx.hash, 10)}</a><span class="tooltiptext">${
      tx.hash
    }</span></span></td></tr>`;
  }

  return returnString;
};
