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
export async function getNames(type, num) {
  let endpoint = 'http://localhost:13037/names?type=';
  num = `&num=${num}`;

  switch (type) {
    case "close":
      endpoint += "close" + num;
      break;
    case "open":
      endpoint += "open" + num;
      break;
    case "bid":
      endpoint += "bid" + num;
      break;
    case "reveal":
      endpoint += "reveal" + num;
      break;
    default:
      endpoint += "all" + num;
  }

  let results = await fetch(endpoint);
  return results.json();
}
