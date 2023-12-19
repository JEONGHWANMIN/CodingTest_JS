const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v) => +v);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
  if (a == b && a == c) {
    console.log(10000 + a * 1000);
  } else if (a === b && a !== c) {
    console.log(1000 + a * 100);
  } else if (b === c && b !== a) {
    console.log(1000 + c * 100);
  } else if (a === c && a !== b) {
    console.log(1000 + a * 100);
  } else {
    console.log(Math.max(a, b, c) * 100);
  }
}
