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
  // 문자 하나를 집는다. 
  for (let i = 0; i < str.length; i++) {
    // dial 배열 요소 하나하나 돌면서 문자가 포함되어 있으면 그 인덱스 + 1 을 반환한다. 
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
