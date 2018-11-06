const humanizeDuration = require("humanize-duration");

module.exports = function(blocks) {
  let returnString = "";

  for (block of blocks) {
    let duration = Math.floor(Date.now() / 1000) - block.time;
    let minerAddress = block.coinbaseTx.outputs[0].address;

    returnString += `<tr><td><a class="minerLinks" href="/block/${
      block.height
    }">${block.height}</a></td><td>${humanizeDuration(duration * 1000, {
      round: true,
      largest: 1
    })} ago</td><td><a class="minerLinks" href="/txs?block=${block.height}">${
      block.tx.length
    }</a></td><td><a class="minerLinks" href="/address/${minerAddress}">${minerAddress}</a></td><td>${
      block.size
    }</td></tr>`;
  }

  return returnString;
};
