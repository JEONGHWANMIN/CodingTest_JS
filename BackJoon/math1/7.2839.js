const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(num) {
  let result = 0;
  while (true) {
    if (num % 5 === 0) {
      result = result + num / 5;
      break;
    }
    num = num - 3;
    result = result + 1;
    if (num < 0) return -1;
  }
  return result;
}

console.log(solution(+input));
