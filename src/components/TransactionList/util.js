export const title = (length, name) => {
  if (length === 1) {
    return "1 " + name;
  } else {
    return length + " " + name + "s";
  }
};
