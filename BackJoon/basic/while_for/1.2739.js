const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
}

solution(+input);
