// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [count, ...res] = input;

function solution(arr) {
  // 각 학생들 점수를 더해서 평균을 구한다.
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i].split(' ');
    let sum = 0;
    let percent = 100 / +target[0];
    let result = 0;
    for (let j = 1; j < target.length; j++) {
      sum = sum + +target[j];
    }
    // 평균
    let avg = sum / +target[0];
    for (let j = 1; j < target.length; j++) {
      if (target[j] > avg) {
        result = result + percent;
      }
    }
    console.log(result.toFixed(3) + '%');
  }
}

solution(res);
