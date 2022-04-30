const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => +v);
function solution(...args) {
  let newStr = '';
  let result = args[0] * args[1] * args[2] + '';

  let list = new Array(10).fill(0);
  for (let i = 0; i < result.length; i++) {
    list[result[i]]++;
  }
  for (let i = 0; i < list.length; i++) {
    newStr = newStr + list[i] + '\n';
  }
  console.log(newStr);
}

solution(...input);
