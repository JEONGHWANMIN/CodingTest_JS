const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input.map((arr) => arr.split(' '));

function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return;
    }
    return a[0] - b[0];
  });
  return arr;
}

const result = solution(arr);
let str = '';
for (let el of result) {
  str = str + el[0] + ' ' + el[1] + '\n';
}
console.log(str);
