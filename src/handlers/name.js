const { getClient } = require("../util/clients.js");

async function blockHandler(request, h) {
  const client = getClient();
  const name = request.params.name;

  let nameData;
  try {
    nameData = await client.execute("getnameinfo", [name]);
  } catch (e) {
    console.log(e);
  }

  console.log(nameData.info.owner);

  return h.view("name", { name: nameData });
}

module.exports = blockHandler;
