const config = require("config");
const { WalletClient, NodeClient } = require("hs-client");
const NomenclateClient = require("nomenclate-js");
const Urkel = require("urkel-js");

const { Network } = require("hsd");
const network = Network.get(config.get("node-network"));

const walletOptions = {
  network: network.type,
  host: config.get("node-host"),
  port: network.walletPort,
  apiKey: config.get("node-api-key")
};

const clientOptions = {
  host: config.get("node-host"),
  network: network.type,
  port: network.rpcPort,
  apiKey: config.get("node-api-key")
};

const nomenclateOptions = {
  host: config.get("node-host"),
  port: 8080,
  apiKey: config.get("node-api-key")
};

const urkelOptions = {
  slug: "hns"
};

if (config.has("urkel-api-key")) {
  urkelOptions.apikey = config.get("urkel-api-key");
}

if (config.has("urkel-api-url")) {
  urkelOptions.url = config.get("urkel-api-url");
}

let _walletClient;
let _client;
let _wallet;
let _nomenclate;
let _urkel;

//Can't figure out error handling on here... Doesn't respect Try/Catch blocks.
//XXX
async function initWalletAndClient() {
  _walletClient = new WalletClient(walletOptions);
  _wallet = await _walletClient.wallet(config.get("wallet-id"));
  _client = new NodeClient(clientOptions);
  _nomenclate = new NomenclateClient(nomenclateOptions);
  _urkel = new Urkel(urkelOptions);
  await _client.open();
  await _walletClient.open();
  await _wallet.open();
  await _nomenclate.open();
}

function getClient() {
  return _client;
}

function getNomenclate() {
  return _nomenclate;
}

function getWallet() {
  return _wallet;
}

function getWalletClient() {
  return _walletClient;
}

function getUrkel() {
  return _urkel;
}

module.exports.getWallet = getWallet;
module.exports.getClient = getClient;
module.exports.getNomenclate = getNomenclate;
module.exports.getUrkel = getUrkel;
module.exports.getWalletClient = getWalletClient;
module.exports.initWalletAndClient = initWalletAndClient;
module.exports.network = network;
