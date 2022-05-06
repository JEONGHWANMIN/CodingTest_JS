const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let Case = Number(input[0]);

function solution(arr) {
  let num = Number(arr[0]);
  let str = arr[1];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + str[i].repeat(num);
  }
  return result;
}

for (let i = 1; i <= Case; i++) {
  console.log(solution(input[i].split(' ')));
}
