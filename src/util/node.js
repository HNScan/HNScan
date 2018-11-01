const config = require("config");

const FullNode = require("../../../hsd/lib/node/fullnode");
const plugin = require("../../../hsd/lib/wallet/plugin");

//Local Imports
const { getClient } = require("./clients.js");

let node;
let nodeOriginal;
let wallet;
let client;

/**
 * _initBaseNode - Start up a base node.
 *
 */
async function _initBaseNode() {
  //XXX need to add all the indexTX
  baseNode = new FullNode({
    config: config.get("Nodes.BaseNodeConfig.config"),
    memory: config.get("Nodes.BaseNodeConfig.memory"),
    workers: config.get("Nodes.BaseNodeConfig.workers"),
    listen: config.get("Nodes.BaseNodeConfig.listen"),
    network: config.get("Nodes.BaseNodeConfig.network"),
    apiKey: config.get("Nodes.BaseNodeConfig.apiKey")
    //loader: require
  });

  if (!baseNode.config.bool("no-wallet") && !baseNode.has("walletdb")) {
    //We need an Env variable to define HSD path to make this easier.
    //This is also already defined above, so let's see if we can combine those two.
    const plugin = require("../../../hsd/lib/wallet/plugin");
    baseNode.use(plugin);
  }

  console.log("Ensuring node....");
  await baseNode.ensure();
  console.log("Opening node....");
  await baseNode.open();
  await baseNode.connect();
  baseNode.startSync();

  //We might want to investigate syncChain command for the walletdb here.
}

/**
 * checkBaseNode
 *
 * @returns {boolean} True if base node is running, false otherwise.
 */
async function _checkBaseNode() {
  //Probably grab this at the beginning of the file.
  client = getClient();

  try {
    const clientinfo = await client.getInfo();
  } catch (err) {
    //if we get an error connecting, then prompt user to start a new node.
    if (err.code === "ECONNREFUSED") {
      return false;
    }
  }

  return true;
}

/**
 * Initalize the various nodes - Mining, Base, and Test nodes.
 *
 * @returns {undefined}
 */
async function initNodes() {
  //Check if we want to start a base node.
  //First check if the base node exists
  let running = await _checkBaseNode();

  if (!running) {
    //Initialize our base node.
    await _initBaseNode();
  }
}

//Couple of more functions that I think we want here.
//The first is a function to check if there is a full node running already, and if not, then create our own.
//The second is to be able to make those fake deposits.
//The third (albeit probably not a function in it of itself) is to make sure this all works with Testnet nodes,
//and run them according.
//The one that checks if a full node is running or node should also work on mainnet as well.
module.exports.initNodes = initNodes;
