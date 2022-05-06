const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  str = str.toLowerCase();
  let result = [];
  let str_Counter = {};
  for (let i = 0; i < str.length; i++) {
    str_Counter[str[i]] = (str_Counter[str[i]] | 0) + 1;
  }

  console.log(str_Counter);
}

console.log(solution(input));
