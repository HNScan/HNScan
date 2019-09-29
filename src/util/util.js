import humanizeDuration from "humanize-duration";
import Decimal from "decimal.js";

const exponentScales = [
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

export function formatLargeNumber(n, decimalPlaces) {
  for (let i = 0; i < exponentScales.length; i++) {
    let item = exponentScales[i];

    let fraction = new Decimal(n / item.val);
    if (fraction >= 1) {
      return [fraction.toDecimalPlaces(decimalPlaces), item];
    }
  }

  return [new Decimal(n).toDecimalPlaces(decimalPlaces), {}];
}

//We need to use Bignum across the board in this app. Make that a v2 task XXX
export function hnsValues(amount) {
  if (!amount) return;
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

export function truncateHash(hash) {
  let num = 7;
  let len = hash.length;
  let firstHalf = hash.substring(0, num);
  let secondHalf = hash.substring(len - num, len);

  if (num * 2 >= hash) {
    //can't be truncated with given num value
    return hash;
  }

  return firstHalf + "...." + secondHalf;
}

export function sumTxOutputs(outputs) {
  let sum = 0;

  for (let i = 0; i < outputs.length; i++) {
    sum = +outputs[i].value;
  }

  return sum;
}

// Takes in a time stamp and returns the time ago something was (humanized)
export function timeAgo(timestamp) {
  if (timestamp <= 0) return;
  return (
    humanizeDuration(Date.now() - timestamp * 1000, {
      largest: 1,
      round: true
    }) + " ago"
  );
}

export function sciNotation(num, places) {
  let arr = toSciNotation(num);
  let number = arr[0].toFixed(places);
  let exponent = arr[1];

  return [number, exponent];
}

// Takes in a number and returns an array
// return: [decimal, exponent]
function toSciNotation(num) {
  if (typeof num !== "number") {
    return;
  }

  if (!num) {
    return [0, 0];
  }

  let sign = Math.sign(num);
  let coefficient = Math.abs(num);
  let isLarge = Math.floor(coefficient);
  let exponent = 0;

  if (isLarge) {
    while (Math.floor(coefficient / 10) > 0) {
      coefficient /= 10;
      exponent++;
    }
  } else {
    while (Math.floor(coefficient) < 1) {
      coefficient *= 10;
      exponent--;
    }
  }
  return [sign * coefficient, exponent];
}

//@todo
export function checkPool(minerAddress) {
  //Check if a pool exists with this address, otherwise just return.

  return minerAddress;
}
