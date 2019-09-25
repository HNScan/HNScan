// ----- HOME SCREEN REQUESTS -----
// Get blockchain info
export async function getInfo() {
  // Home Page Info
  let results = await fetch("http://localhost:8080/info");
  return results.json();
}

// ----- BLOCKS REQUEST -----
export async function getBlocks(limit, offset) {
  let endpoint = `http://localhost:8080/blocks?limit=${limit}&offset=${offset}`;
  let results = await fetch(endpoint);
  return results.json();
}

// ----- NAMES REQUEST -----
export async function getNames(type, limit, offset) {
  let endpoint = "http://localhost:13037/names?type=";
  limit = `&limit=${limit}`;
  offset = `&offset=${offset}`;

  switch (type) {
    case "close":
      endpoint += "close" + limit + offset;
      break;
    case "open":
      endpoint += "open" + limit + offset;
      break;
    case "bid":
      endpoint += "bid" + limit + offset;
      break;
    case "reveal":
      endpoint += "reveal" + limit + offset;
      break;
    default:
      endpoint += "all" + limit + offset;
  }

  let results = await fetch(endpoint);
  return results.json();
}
