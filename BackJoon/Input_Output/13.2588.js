const input = require('fs')
  .readFileSync('../Input.txt')
  .toString()
  .trim()
  .split('\n');

let A = input[0];
let B = input[1];
console.log(Number(A) * Number(B[2]));
console.log(Number(A) * Number(B[1]));
console.log(Number(A) * Number(B[0]));

console.log(A * B);
