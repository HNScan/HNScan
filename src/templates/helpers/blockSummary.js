module.exports = function(blocks) {
  let returnString = "";
  let block = blocks[0];
  // console.log(block);
  returnString += `<div class="cardItemContainer">
    <img src="" alt="CUBE">Block#: <a href="/block/${block.height}">${
    block.height
  }</a>
    <div class="cardItemDetailContainer">
      <p class="cardItemDetail">Mined By: <a href="#">Test Test</a></p>
      <p class="cardItemDetail"><a>156</a>TKNS in 20 seconds</p>
      <p class="cardItemDetail">Block Reward: 3.876 HNS</p>
    </div>
  </div>`;

  return returnString;
};
