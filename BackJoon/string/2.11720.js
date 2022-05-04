const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/*
10 , 1 0 어떻게 구분하지 ?
*/
function solution(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + +str[i];
  }
  return sum;
}

console.log(solution(input[1]));
