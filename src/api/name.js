async function getName(name) {
  if (config.has("urkel-enabled")) {
    return _getNameUrkel(name);
  } else {
    return _getNameDaemon(name);
  }
}

async function _getNameUrkel(name) {
  return null;
}

async function _getNameDaemon(name) {
  const client = getClient();

  let data = await client.execute("getnameinfo", [name]);

  data.name = name;

  //Format Next State Data.
  let nameData = formatName(data);

  //Not sure this covers all states, but this works for now.
  if ((nameData.state = "CLOSED")) {
    nameData.records = await client.execute("getnameresource", [name]);
  }

  return nameData;
}

async function getNameHistory(name) {
  if (config.has("urkel-enabled")) {
    return _getNameHistoryUrkel(name);
  } else {
    return _getNameHistoryDaemon(name);
  }
}

async function _getNameHistoryUrkel(name) {}

async function _getNameHistoryDaemon(name) {
  const nomenclate = getNomenclate();

  //XXX Janky way to skip pagination for right now where we make the limit extremely high.
  //We won't bump up against issues here until the histories become extremely large, but
  //This will fix our truncation issues on auction history until we implement pagination.
  data = await nomenclate.getNameHistory(name, 1, 10000);

  history = await formatAuctionHistory(name, data.result);

  return history;
}