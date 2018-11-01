module.exports = function(names) {
  let returnString = "";

  for (name of names) {
    returnString += `<tr><td><a href="/name/${name.name}">${
      name.name
    }</a></td><td>${name.state}</td><td><a href="/block/${name.height}">${
      name.height
    }</a></td></tr>`;
  }

  return returnString;
};
