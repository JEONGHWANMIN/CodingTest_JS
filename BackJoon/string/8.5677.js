const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let dial = [
  '',
  '',
  'ABC',
  'DEF',
  'GHI',
  'JKL',
  'MNO',
  'PQRS',
  'TUV',
  'WXYZ',
  '',
];

function solution(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < dial.length; j++) {
      if (dial[j].includes(str[i])) {
        result = result + j + 1;
        break;
      }
    }
  }
  return result;
}

console.log(solution(input));
