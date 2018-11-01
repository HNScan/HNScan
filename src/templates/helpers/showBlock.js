module.exports = function(block) {
  //Summary
  let returnString = `<div class="blockTableContainer"><h3>Summary</h3><table class="table">`;
  returnString += `<tbody>`;

  //Height
  returnString += `<tr><td>Height:</td><td>${block.height}</td></tr>`;

  //Age
  returnString += `<tr><td>Timestamp:</td><td>${block.time}</td></tr>`;

  //Transactions
  if (block.tx.length > 1) {
    returnString += `<tr><td>Transactions:</td><td><a href="/txs?block=${
      block.height
    }">${block.tx.length} transactions</a> in this block</td></tr>`;
  } else {
    //XXX I think there is an easier way to do this, maybe a ternary - but this works for now.
    returnString += `<tr><td>Transactions:</td><td><a href="/txs?block=${
      block.height
    }">${block.tx.length} transaction</a> in this block</td></tr>`;
  }

  //Mined By
  let minerAddress = block.tx[0].vout[0].address.hash;
  returnString += `<tr><td>Mined By:</td><td><a href="/address/minerAddress">${minerAddress}</a></td></tr>`;

  //Version
  returnString += `<tr><td>Version:</td><td>${block.version}</td></tr>`;

  //Bits
  returnString += `<tr><td>Bits:</td><td>${block.bits}</td></tr>`;

  //Size
  returnString += `<tr><td>Size:</td><td>${block.size}</td></tr>`;

  //Weight
  returnString += `<tr><td>Weight:</td><td>${block.weight}</td></tr>`;

  //returnString += "<tr>";
  ////Add block
  //returnString +=
  //  '<td><a href="/block/' + block.height + '">' + block.height + "</a></td>";

  ////Age
  //returnString += "<td>" + block.time + "</td>";

  ////Transactions
  //returnString +=
  //  `<td><a href="/txs?block=` +
  //  block.height +
  //  `">` +
  //  block.tx.length +
  //  `</a></td>`;

  ////Miner
  //let minerAddress = block.tx[0].vout[0].address.hash;
  //returnString +=
  //  `<td><a href="/address/` + minerAddress + `">` + minerAddress + "</a></td>";

  ////Size
  //returnString += "<td>" + block.size + "</td>";

  //End Summary
  returnString += "</tbody></table></div>";

  //Hashes
  returnString += `<div class="blockTableContainer"><h3>Hashes</h3><table class="table">`;

  returnString += `<tbody>`;

  //Hash
  returnString += `<tr><td>Hash:</td><td>${block.hash}</td></tr>`;

  //Parent Hash
  returnString += `<tr><td>Parent Hash:</td><td>${
    block.previousblockhash
  }</td></tr>`;

  //Merkle Root
  returnString += `<tr><td>Merkle Root:</td><td>${block.merkleroot}</td></tr>`;

  //Tree Root
  returnString += `<tr><td>Tree Root:</td><td>${block.treeroot}</td></tr>`;

  //End Hashes
  returnString += "</tbody></table></div>";

  return returnString;
};
