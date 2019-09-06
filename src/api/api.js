// ----- HOME SCREEN REQUESTS -----

// Get most recent 5 blocks
export async function getRecentBlocks() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/blocks?num=5");
  return results.json();
  // console.log(await results.json());
}

// Get most recent 5 blocks
export async function getBlocks() {
  //TODO: this needs to be dynamic eventually
  let results = await fetch("http://localhost:13037/blocks?num=25");
  // console.log(await results.json());
}
