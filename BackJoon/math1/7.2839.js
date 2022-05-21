const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(num) {
  // 5씩 빼준다.
  let five = 0;
  let three;
  if (num < 5 && num % 3 !== 0) return -1;
  while (num > 3) {
    num = num - 5;
    five++;
    if (num % 5 !== 0 && num % 3 === 0) break;
  }
  three = num / 3;

  return five + three;
}

console.log(solution(+input));
