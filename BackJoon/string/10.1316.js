const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = 0;
let Case = input[0];

function groupWordCheker(word) {
  let check = [];
  for (let value of word) {
    if (check.includes(value)) {
      if (check.at(-1) === value) {
        continue;
      } else {
        return false;
      }
    } else {
      check.push(value);
    }
  }
  // 그냥 확인용으로 true 걸어놨는데 통과되버림 .. 아마 true -> 1로 변환되서 숫자 잘 세어진듯
  return true;
}

for (let i = 1; i <= Case; i++) {
  result = result + groupWordCheker(input[i]);
}

console.log(result);
