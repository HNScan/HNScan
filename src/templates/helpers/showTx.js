module.exports = function(tx) {
  //Summary
  let returnString = `<table class="table">`;
  returnString += `<tbody>`;

  //Summary

  //Hash
  returnString += `<tr><td>Tx Hash:</td><td>${tx.hash}</td></tr>`;

  //Witness Hash
  returnString += `<tr><td>Witness Hash:</td><td>${tx.witnessHash}</td></tr>`;

  //Timestamp
  returnString += `<tr><td>Timestamp:</td><td>${tx.time}</td></tr>`;

  //Height
  returnString += `<tr><td>Block Height:</td><td>${tx.height}</td></tr>`;

  //Index
  returnString += `<tr><td>Block Index:</td><td>${tx.index}</td></tr>`;

  //Fee
  returnString += `<tr><td>Fee:</td><td>${tx.fee}</td></tr>`;

  //End Summary
  returnString += "</tbody></table>";

  return returnString;
};
