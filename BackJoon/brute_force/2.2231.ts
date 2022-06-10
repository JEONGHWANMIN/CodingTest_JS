const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(num: number): any {
  let numArr = (num + '').split('');
  let result = num;
  for (let i = 0; i < numArr.length; i++) {
    result = result + +numArr[i];
  }
  if (result === +input) return true;
  return false;
}

for (var i = 1; i <= 1000000; i++) {
  let result = solution(i);
  if (result) {
    console.log(i);
    break;
  }
}
if (i >= 1000001) {
  console.log(0);
}

export {};
