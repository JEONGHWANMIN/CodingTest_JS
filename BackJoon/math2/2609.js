const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v) => +v);

function GDC(A, B) {
  let R = A % B;
  if (R === 0) return B;
  return GDC(B, R);
}

const result1 = GDC(input[0], input[1]);
const result2 = (input[0] * input[1]) / result1;
console.log(result1);
console.log(result2);
