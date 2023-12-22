const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = input[1].split(' ').map((v) => +v);
// 최댓값 구하기
let max = Math.max(...arr);
// 최댓값을 제외한 숫자 구하기
// let res = arr.filter((v) => v !== max);
// 해당점수 / 최대점수 * 100
let res = arr.map((v) => (v / max) * 100);
let result = 0;
for (let i = 0; i < res.length; i++) {
  result = result + res[i];
}
console.log(result / +input[0]);
// console.log((result + max) / +input[0]);
