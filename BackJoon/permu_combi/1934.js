const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input);

const n = input.shift();

function helper(A, B) {
  if (A / B === 0) return B;
  let R = A / B;
  return helper(B, R);
}

console.log(helper(12, 18));
// console.log(6 * 12 * 0.5);
