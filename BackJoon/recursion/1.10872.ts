const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(num: number): number {
  if (num <= 1) return 1;
  return num * solution(num - 1);
}

console.log(solution(+input));

export {};

// solution(10)
// solution(9)
// solution(8)
// solution(7)
// solution(6)
// solution(5)
// solution(4)
// solution(3)
// solution(2)
// solution(1) => return 1
