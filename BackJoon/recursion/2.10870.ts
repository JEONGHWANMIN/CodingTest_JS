const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(n: number): number {
  if (n === 0) return 0;
  if (n <= 1) return 1;

  return solution(n - 1) + solution(n - 2);
}

console.log(solution(+input));
export {};
