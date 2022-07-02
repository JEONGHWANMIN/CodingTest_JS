const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

let N = +input.shift();

input.sort((a, b) => a - b);

function solutuon(arr) {
  let result = [];
  let sum = arr.reduce((acc, cur) => acc + cur);
  console.log(Math.round(sum / arr.length));
  console.log(arr[Math.floor(arr.length / 2)]);
  let arrCount = {};
}

solutuon(input);
