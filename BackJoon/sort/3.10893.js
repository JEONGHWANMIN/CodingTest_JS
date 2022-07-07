const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
console.log(
  input
    .map((v) => +v)
    .sort((a, b) => a - b)
    .join('\n')
);
