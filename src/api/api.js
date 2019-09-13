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
