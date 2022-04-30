const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(n) {
  let answer = '';
  for (let i = 1; i <= n; i++) {
    answer = answer + ' '.repeat(n - i) + '*'.repeat(i) + '\n';
  }
  console.log(answer);
}

solution(+input);
