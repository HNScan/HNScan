// ----- HOME SCREEN REQUESTS -----
// Get blockchain info
export async function getInfo() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/verbose");
  return results.json();
}

// Get most recent 5 blocks
export async function getRecentBlocks() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/blocks?num=5");
  return results.json();
}

// ----- BLOCKS SCREEN REQUESTS -----
// Get most recent 25 blocks
export async function getBlocks() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/blocks?num=25");
  return results.json();
}
