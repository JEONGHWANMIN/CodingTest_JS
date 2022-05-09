const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(str) {
  str = str.trim();
  if (str === '') return 0;
  str = str.split(' ');
  return str.length;
}

console.log(solution(input));
