const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
let coordinate = input.map((arr) => arr.split(' ').map((v) => +v));

function solution(arr) {
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  return arr;
}

const result = solution(coordinate);
let str = '';
for (let el of result) {
  str = str + el[0] + ' ' + el[1] + '\n';
}
console.log(str);
