const input = require('fs')
  .readFileSync('../Input.txt')
  .toString()
  .trim()
  .split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A - B);
