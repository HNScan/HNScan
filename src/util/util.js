var Decimal = require("decimal.js");

var exponentScales = [
  {
    val: 1000000000000000000000000000000000,
    name: "?",
    abbreviation: "V",
    exponent: "33"
  },
  {
    val: 1000000000000000000000000000000,
    name: "?",
    abbreviation: "W",
    exponent: "30"
  },
  {
    val: 1000000000000000000000000000,
    name: "?",
    abbreviation: "X",
    exponent: "27"
  },
  {
    val: 1000000000000000000000000,
    name: "yotta",
    abbreviation: "Y",
    exponent: "24"
  },
  {
    val: 1000000000000000000000,
    name: "zetta",
    abbreviation: "Z",
    exponent: "21"
  },
  { val: 1000000000000000000, name: "exa", abbreviation: "E", exponent: "18" },
  { val: 1000000000000000, name: "peta", abbreviation: "P", exponent: "15" },
  { val: 1000000000000, name: "tera", abbreviation: "T", exponent: "12" },
  { val: 1000000000, name: "giga", abbreviation: "G", exponent: "9" },
  { val: 1000000, name: "mega", abbreviation: "M", exponent: "6" },
  { val: 1000, name: "kilo", abbreviation: "K", exponent: "3" },
  { val: 0.001, name: "milli", abbreviation: "m", exponent: "-3" },
  { val: 0.000001, name: "micro", abbreviation: "µ", exponent: "-6" },
  { val: 0.000000001, name: "nano", abbreviation: "n", exponent: "-9" },
  { val: 0.000000000001, name: "pico", abbreviation: "p", exponent: "-12" }
];

function formatLargeNumber(n, decimalPlaces) {
  for (var i = 0; i < exponentScales.length; i++) {
    var item = exponentScales[i];

    var fraction = new Decimal(n / item.val);
    if (fraction >= 1) {
      return [fraction.toDecimalPlaces(decimalPlaces), item];
    }
  }

  return [new Decimal(n).toDecimalPlaces(decimalPlaces), {}];
}

function truncateHash(hash, num) {
  if (num * 2 >= hash) {
    //can't be truncated with given num value
    return hash;
  }

  var len = hash.length;
  var firstHalf = hash.substring(0, num);
  var secondHalf = hash.substring(len - num, len);
  return firstHalf + "...." + secondHalf;
}

//We need to use Bignum across the board in this app. Make that a v2 task XXX
function prettyPrintHNS(amount) {
  let realAmount = amount / 1000000;

  let stringAmount = realAmount.toString();

  stringAmount += " HNS";

  return stringAmount;
}

module.exports = {
  exponentScales: exponentScales,
  formatLargeNumber: formatLargeNumber,
  truncateHash: truncateHash,
  prettyPrintHNS: prettyPrintHNS
};
