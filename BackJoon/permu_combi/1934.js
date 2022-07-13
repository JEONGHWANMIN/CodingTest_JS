const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(' ').map((v) => +v));
}

function GCD(A, B) {
  if (A % B === 0) return B;
  return GCD(B, A % B);
}

function solution(arr) {
  let result = [];
  for (let ar of arr) {
    let gcd = GCD(ar[0], ar[1]);
    result.push((ar[0] * ar[1]) / gcd);
  }
  return result.join('\n');
}

console.log(solution(arr));
