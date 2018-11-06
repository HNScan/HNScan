const { getClient } = require("../util/clients.js");

async function blockHandler(request, h) {
  const client = getClient();
  const name = request.params.name;

  let nameData;
  try {
    // XXX There is a bug for some domains: See "pie"
    nameData = await client.execute("getnameinfo", [name]);
    console.log(nameData);
    //Not sure this covers all states, but this works for now.
    if ((nameData.state = "CLOSED")) {
      nameData.records = await client.execute("getnameresource", [name]);
    }
  } catch (e) {
    console.log(e);
  }

  return h.view("name", { name: nameData });
}

module.exports = blockHandler;
