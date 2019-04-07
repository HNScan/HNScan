//Module imports
const Hapi = require("hapi");
const Path = require("path");
const config = require("config");
const templateFunctions = require("./util/templateFunctions.js");

//File import
const routes = require("./routes.js");

const server = Hapi.server({
  port: config.get("server-port"),
  host: config.get("server-host"),
  routes: {
    files: {
      relativeTo: Path.join(__dirname, "dest")
    }
  }
});

// Setting up error handling for 404s (could be extended to other errors here)
server.ext("onPreResponse", (request, reply) => {
  if (request.response.isBoom) {
    const err = request.response;
    const errName = err.output.payload.error;
    const statusCode = err.output.payload.statusCode;

    if (process.env.NODE_ENV != "production") {
      console.log(err);
    }

    return reply
      .view("404.pug", {
        statusCode: statusCode,
        errName: errName
      })
      .code(statusCode);
  }
  return reply.continue;
});

/* ------- Server Setup -------- */
const initServer = async () => {
  try {
    await server.register(require("vision"));
    await server.register(require("inert"));

    server.views({
      engines: {
        pug: require("pug")
      },
      relativeTo: __dirname,
      path: "templates",
      context: function(request) {
        return templateFunctions;
      }
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
