//Default imports
const initServer = require("./server.js");

//Non-default imports
const { initNodes } = require("./util/node.js");
const { initWalletAndClient } = require("./util/clients.js");

const startup = async () => {
  //This will start any nodes if needed (main node, mining node, testing nodes)
  await initNodes();

  //Initialize our clients to the nodes and wallet.
  await initWalletAndClient();

  //Initializes the http server to handle incoming requests.
  initServer();
};

//Run the app
startup();
