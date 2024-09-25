function reverseString(str) {
  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str.length < 2) {
    return str;
  }
  return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

reverseStringRecursive("yoyo master");