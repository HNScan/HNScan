const config = require("config");
const { WalletClient, NodeClient } = require("hs-client");
const { Network } = require("../../../hsd");
const network = Network.get(config.get("Chain.network"));

//This needs to be moved somewhere else.
const walletOptions = {
  network: network.type,
  port: network.walletPort,
  apiKey: config.get("Nodes.BaseNodeConfig.apiKey")
};

console.log(network.walletPort);

const clientOptions = {
  network: network.type,
  port: network.rpcPort,
  //Get from config
  apiKey: config.get("Nodes.BaseNodeConfig.apiKey")
};

let _walletClient = new WalletClient(walletOptions);
let _client = new NodeClient(clientOptions);
let _wallet;

async function initWalletAndClient() {
  _walletClient = new WalletClient(walletOptions);
  _wallet = await _walletClient.wallet(config.get("Chain.walletID"));
  _client = new NodeClient(clientOptions);
  await _client.open();
  // console.log(wallet);
  await _walletClient.open();
  await _wallet.open();
}

function getClient() {
  return _client;
}

function getWallet() {
  return _wallet;
}

function getWalletClient() {
  return _walletClient;
}

module.exports.getWallet = getWallet;
module.exports.getClient = getClient;
module.exports.getWalletClient = getWalletClient;
module.exports.initWalletAndClient = initWalletAndClient;
module.exports.network = network;
