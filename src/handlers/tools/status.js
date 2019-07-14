const { getClient } = require("../../util/clients.js");

async function statusHandler(request, h) {
  const client = getClient();

  let info;
  let info2;
  let totals;
  let netInfo;

  try {
    info = await client.getInfo();
    info2 = await client.execute("getinfo");
    totals = await client.execute("getnettotals");
    netInfo = await client.execute("getnetworkinfo");
  } catch (e) {
    console.log(e);
  }

  let status = {
    host: info.pool.host,
    port: info.pool.port,
    key: info.pool.identitykey,
    chain: info.network,
    progress: info.chain.progress,
    version: info.version,
    versionAgent: info.pool.agent,
    connections: info2.connections,
    difficulty: info2.difficulty,
    blocks: info.chain.height,
    //Convert to milli for humanize duration
    uptime: info.time.uptime * 1000,
    totalDownloaded: totals.totalbytesrecv,
    totalUploaded: totals.totalbytessent,
    warnings: netInfo.warnings
  };

  return h.view("status.pug", { status });
}

module.exports = statusHandler;
