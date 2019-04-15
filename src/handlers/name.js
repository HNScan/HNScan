const { getName } = require("../api");

const { paginate } = require("../util/util.js");

async function blockHandler(request, h) {
  const namestring = request.params.namestring;

  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  let name = await getName(namestring, limit, offset);

  let pagination = paginate(name.total_txs, limit, page, "name/" + name.name);

  return h.view("name.pug", {
    name,
    pagination
  });
}

module.exports = blockHandler;
