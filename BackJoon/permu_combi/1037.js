const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

const arr = input[0].split(' ');

function solution(arr) {
  if (arr.length === 1) return arr * arr;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max * min;
}

console.log(solution(arr));
