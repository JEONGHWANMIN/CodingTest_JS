const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

// function solution(arr: number[]) {
//   console.log(arr);

//   return [];
// }
