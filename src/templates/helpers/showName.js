module.exports = function(name) {
  console.log(name);

  let returnString = `<div class="blockTableContainer"><h3>Summary</h3><table class="table">`;
  returnString += `<tbody>
  <tr><td>Name:</td><td>${name.info.name}</td>
  <tr><td>Name Hash:</td><td>${name.info.nameHash}</td>
  <tr><td>State:</td><td>${name.info.state}</td>
  <tr><td>Height:</td><td>${name.info.height}</td>
  <tr><td>Renewal:</td><td>${name.info.renewal}</td>
  <tr><td>Value:</td><td>${name.info.value}</td>
  <tr><td>Highest:</td><td>${name.info.highest}</td>
  <tr><td>Transfer:</td><td>${name.info.transfer}</td>
  <tr><td>Revoked:</td><td>${name.info.revoked}</td>
  <tr><td>Claimed:</td><td>${name.info.claimed}</td>
  <tr><td>Weak:</td><td>${name.info.weak}</td>
</tbody></table></div>
    `;

  if (name.records) {
    returnString += `
  <div class="blockTableContainer">
  <h3>Records</h3>
  <table class="table">
  <tbody>
  <tr><td>Version:</td><td>${name.records.version}</td>
  <tr><td>Compat:</td><td>${name.records.compat}</td>
  <tr><td>TTL:</td><td>${name.records.ttl}</td>
  </tbody>
  </table>
  </div>
  `;
  }

  return returnString;
};
