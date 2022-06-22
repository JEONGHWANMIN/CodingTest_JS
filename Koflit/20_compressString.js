function compressString(str) {
  let count = 1;
  let result = '';
  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count >= 3) {
        result = result + count + str[i - 1];
      } else {
        result = result + str[i - 1].repeat(count);
      }
      count = 1;
    }
  }
  return result;
}

// let output = compressString('abc');
// console.log(output); // --> abc

output = compressString('wwwggopp');
console.log(output); // --> 3wggoppo4p
