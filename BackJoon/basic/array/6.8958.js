// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// Solution
function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let result = 0;
    let sum = 0;
    let target = arr[i];
    for (let j = 0; j < target.length; j++) {
      if (target[j] === 'O') {
        sum = sum + 1;
      } else if (target[j] === 'X') {
        sum = 0;
      }
      result = result + sum;
    }
    console.log(result);
  }
}

solution(input);
