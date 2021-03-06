const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  let result = 1;
  let count;
  // 2~7 , 8~19 , 20~37 , 38~61 
  // 6 등차수열 
  for (count = 1; true; count++) {
    result = result + 6 * count;
    if (num <= result) break;
  }
  return count + 1;
}

console.log(solution(+input));
