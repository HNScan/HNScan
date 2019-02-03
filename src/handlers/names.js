const { getNames } = require("../api");

const { paginate } = require("../util/util.js");

async function namesHandler(request, h) {
  let limit = request.query.limit;
  let page = request.query.p;
  let offset = (page - 1) * limit;

  let data;
  try {
    data = await getNames(limit, offset);
  } catch (e) {
    console.log(e);
  }

  let pagination = paginate(data.total, limit, page, "names");

  return h.view("names.pug", {
    names: data.result,
    pagination
  });
}

module.exports = namesHandler;
