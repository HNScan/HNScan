var Joi = require("joi");

txHandler = require("./handlers/tx.js");
blockHandler = require("./handlers/block.js");
blocksHandler = require("./handlers/blocks.js");
addressHandler = require("./handlers/address.js");
homeHandler = require("./handlers/home.js");
nameHandler = require("./handlers/name.js");
namesHandler = require("./handlers/names.js");
searchHandler = require("./handlers/search.js");

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
    path: "/block/{blockNumber}",
    handler: blockHandler,
    options: {
      validate: {
        params: {
          //Same goes for block numbers, they are easy to parse so we can ensure this is correct.
          //XXX
          blockNumber: Joi.string()
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
          start: Joi.string(),
          end: Joi.string(),
          p: Joi.string(),
          amt: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/address/{addressHash}",
    handler: addressHandler,
    options: {
      validate: {
        params: {
          //Same goes for block numbers, they are easy to parse so we can ensure this is correct.
          //XXX
          addressHash: Joi.string()
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
