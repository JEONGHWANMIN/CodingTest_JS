const input = require('fs')
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ');

let [A, B] = input;

A = A * 1;
B = B * 1;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
