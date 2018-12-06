//Default imports
const initServer = require("./server.js");

//Non-default imports
const { initWalletAndClient } = require("./util/clients.js");

const startup = async () => {
  //Initialize our clients to the nodes and wallet.
  await initWalletAndClient();

  //Initializes the http server to handle incoming requests.
  initServer();
};

//Run the app
startup();
