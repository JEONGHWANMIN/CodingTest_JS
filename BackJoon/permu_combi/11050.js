const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [N, K] = input.split(' ').map((v) => +v);

function solution(N, K) {
  let left = 1;
  let right = 1;
  for (let i = 0; i < K; i++) {
    left = left * N;
    N--;
  }
  for (let i = K; i > 0; i--) {
    right = right * i;
  }
  return left / right;
}

console.log(solution(N, K));
