//Module imports
const Hapi = require("hapi");
const Path = require("path");
const config = require("config");

//File import
const routes = require("./routes.js");

const server = Hapi.server({
  port: config.get("Server.port"),
  host: config.get("Server.host"),
  //Make sure this comes from config - depending on the env.
  //TODO
  routes: {
    cors: {
      origin: ["*"]
    },
    files: {
      relativeTo: Path.join(__dirname, "public")
    }
  }
});

/* ------- Server Setup -------- */
const initServer = async () => {
  try {
    await server.register(require("vision"));
    await server.register(require("inert"));

    server.views({
      engines: {
        html: require("handlebars")
      },
      relativeTo: __dirname,
      path: "templates",
      layout: true,
      layoutPath: "templates/layouts",
      helpersPath: "templates/helpers",
      partialsPath: "templates/partials"
    });

    server.route(routes);

    await server.start();
  } catch (err) {
    //Log any errors
    console.log("Error: " + err);
    process.exit(1);
  }
  console.log(`Server is running at: ${server.info.uri}`);
};

module.exports = initServer;
