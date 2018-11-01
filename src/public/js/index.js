// Searchbar on Enter Keypress
function catchEnter(e) {
  const searchbar = document.querySelector(".searchbar");
  let search = searchbar.value.trim(),
    length = search.length,
    block,
    address,
    hash,
    name;

  if (search !== "" && e.keyCode === 13) {
    //This needs a RegEx to test if it is a HNS hash
    if (length === 64) {
      hash = search;
      window.location.href = `/tx/${hash}`;
    } else if (isNaN(Number(search)) === false && search !== " ") {
      //Need better way to determine block height
      block = search;
      window.location.href = `/block/${block}`;
    }
  }
}
