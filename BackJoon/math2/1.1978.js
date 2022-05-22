const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let result = 0;
function solution(num) {
  if (num <= 1) return 0;
  if (num === 2) return 1;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return 0;
    }
  }
  return 1;
}

let arr = input[1].split(' ').map((v) => +v);
for (let i = 0; i < arr.length; i++) {
  result = result + solution(arr[i]);
}

console.log(result);
