const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0];
let res = input[1].split(' ').map((v) => +v);

function solution() {
  let max = Math.max(...res);
  let min = Math.min(...res);
  console.log(min, max);
}

solution();
