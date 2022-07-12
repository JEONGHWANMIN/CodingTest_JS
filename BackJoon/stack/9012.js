const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();
let result = [];
function solution(str) {
  const stack = [];
  const opener = {
    '(': ')',
  };
  const closer = ')';

  for (let braket of str) {
    if (braket === '(') {
      stack.push(braket);
    } else if (closer.includes(braket)) {
      const poped = stack.pop();
      if (opener[poped] !== braket) {
        return 'NO';
      }
    }
  }

  if (stack.length === 0) return 'YES';
  return 'NO';
}

for (let i = 0; i < n; i++) {
  result.push(solution(input[i]));
}
console.log(result.join('\n'));
