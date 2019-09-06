//We need to use Bignum across the board in this app. Make that a v2 task XXX
export function hnsValues(amount) {
  let realAmount = amount / 1000000;
  let stringAmount = numberWithCommas(realAmount).toString();
  stringAmount += " HNS";
  return stringAmount;
}

export function numberWithCommas(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
