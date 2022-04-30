const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [a, b] = input[0].split(' ');
const res = input[1].split(' ').map((v) => +v);

function solution(n, x, arr) {
  let str = '';
  for (let i = 0; i < n; i++) {
    if (arr[i] < x) str = str + arr[i] + ' ';
  }
  console.log(str);
}

solution(a, b, res);
