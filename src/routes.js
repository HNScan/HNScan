var Joi = require("joi");

txHandler = require("./handlers/tx.js");
txsHandler = require("./handlers/txs.js");
blockHandler = require("./handlers/block.js");
blocksHandler = require("./handlers/blocks.js");
addressHandler = require("./handlers/address.js");
homeHandler = require("./handlers/home.js");
nameHandler = require("./handlers/name.js");
namesHandler = require("./handlers/names.js");

//Tool Handlers
peersHandler = require("./handlers/tools/peers.js");
statusHandler = require("./handlers/tools/status.js");
airdropHandler = require("./handlers/tools/airdrop.js");
airdropclaimHandler = require("./handlers/tools/airdropclaim.js");

//XXX Move these to an API folder or something along those lines - in the handlers folder structure.
searchHandler = require("./handlers/search.js");
submitclaimHandler = require("./handlers/tools/submitclaim.js");

if (process.env.NODE_ENV !== "production") {
  //For development only routes.
}

//TODO schema for all payloads...

//We should add a base url to url to these -- something like oururl.com/api/v1/
var routes = [
  {
    method: "GET",
    path: "/",
    handler: homeHandler
  },
  {
    method: "GET",
    path: "/address/{hash}",
    handler: addressHandler,
    options: {
      validate: {
        params: {
          hash: Joi.string()
        },
        query: {
          limit: Joi.number()
            .max(50)
            .default(10),
          p: Joi.number().default(1)
        }
      }
    }
  },
  {
    method: "GET",
    path: "/block/{height}",
    handler: blockHandler,
    options: {
      validate: {
        params: {
          height: Joi.number()
        },
        query: {
          limit: Joi.number()
            .max(50)
            .default(10),
          p: Joi.number().default(1)
        }
      }
    }
  },
  {
    method: "GET",
    path: "/blocks",
    handler: blocksHandler,
    options: {
      validate: {
        query: {
          limit: Joi.number()
            .max(50)
            .default(25),
          p: Joi.number().default(1)
        }
      }
    }
  },
  {
    method: "GET",
    path: "/about",
    handler: function(request, h) {
      return h.view("about.pug", {});
    }
  },
  {
    method: "GET",
    path: "/tx/{hash}",
    handler: txHandler,
    options: {
      validate: {
        params: {
          //Might want to toss in a regex here, but Transactions have a standard hash so
          //This will be relatively straight forward to validate I believe
          //XXX
          hash: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/txs",
    handler: txsHandler,
    options: {
      validate: {
        query: {
          block: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/name/{name}",
    handler: nameHandler,
    options: {
      validate: {
        params: {
          name: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/names",
    handler: namesHandler
  },
  {
    method: "GET",
    path: "/peers",
    handler: peersHandler
  },
  {
    method: "GET",
    path: "/status",
    handler: statusHandler
  },
  {
    method: "GET",
    path: "/airdrop",
    handler: airdropHandler
  },
  {
    method: "GET",
    path: "/airdropclaim",
    handler: airdropclaimHandler
  },
  {
    method: "POST",
    path: "/search",
    handler: searchHandler,
    options: {
      validate: {
        query: {
          q: Joi.string()
        }
      }
    }
  },
  {
    method: "POST",
    path: "/submitclaim",
    handler: submitclaimHandler,
    options: {
      validate: {
        query: {
          confirm: Joi.bool()
        },
        payload: {
          addr: Joi.string(),
          proof: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: ".",
        redirectToSlash: true,
        index: true
      }
    }
  }
];

//Add our development only routes here.
if (process.env.NODE_ENV !== "production") {
  //Dev only routes go here.
}

module.exports = routes;
