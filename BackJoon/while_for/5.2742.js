const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(n) {
  let answer = '';
  for (let i = n; i >= 1; i--) {
    answer = answer + i + '\n';
  }
  console.log(answer);
}

solution(+input);
