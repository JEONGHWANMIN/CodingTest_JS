const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift();
let arr = input[0].split(' ').map((v) => +v);
function solution(arr) {
  let sum = -1000;
  let dp = [];
  for (let i = 0; i < arr.length; i++) {
    if (dp[i - 1] + arr[i] > arr[i]) {
      dp[i] = arr[i] + dp[i - 1];
    } else {
      sum = arr[i];
      dp[i] = sum;
    }
  }
  return Math.max(...dp);
}

console.log(solution(arr));
