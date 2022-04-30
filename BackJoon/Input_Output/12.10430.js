const input = require('fs')
  .readFileSync('../Input.txt')
  .toString()
  .trim()
  .split(' ');

let A = input[0] * 1;
let B = input[1] * 1;
let C = input[2] * 1;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
