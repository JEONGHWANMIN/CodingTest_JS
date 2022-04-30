const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [number, ...res] = input;

function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    console.log(+arr[i][0] + +arr[i][2]);
  }
}

solution(number, res);
