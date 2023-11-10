const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

let arr = input.map((v) => +v);

function solution(arr) {
  let stack = [];
  for (let el of arr) {
    if (el === 0) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }
  if (stack.length === 0) return 0;
  return stack.reduce((acc, cur) => acc + cur);
}

console.log(solution(arr));
