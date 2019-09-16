// ----- HOME SCREEN REQUESTS -----
// Get blockchain info
export async function getInfo() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/verbose");
  return results.json();
}


// ----- BLOCKS REQUEST -----
// Get most recent 25 blocks
export async function getBlocks(numBlocks) {
  //TODO: this needs to be dynamic eventually
  let results = await fetch(`http://localhost:13037/blocks?num=${numBlocks}`);
  return results.json();
}

// ----- NAMES REQUEST -----
export async function getNames(type, limit) {
  const close = '?close=true';
  const open = '?open=true';
  const bid = '?bid=true';
  const reveal = '?reveal=true';
  const all = '?all=true';
  let endpoint = 'http://localhost:13037/names';

  limit = `&limit=${limit}`;

  switch (type) {
    case "close":
      endpoint += close + limit;
      break;
    case "open":
      endpoint += open + limit;
      break;
    case "bid":
      endpoint += bid + limit;
      break;
    case "reveal":
      endpoint += reveal + limit;
      break;
    default:
      endpoint += all + limit;
  }

  let results = await fetch(endpoint);
  return results.json();
}
