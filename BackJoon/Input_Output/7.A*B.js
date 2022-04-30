const input = require('fs')
  .readFileSync('../Input.txt')
  .toString()
  .trim()
  .split(' ');

const A = input[0] * 1;
const B = input[1] * 1;

console.log(A * B);
