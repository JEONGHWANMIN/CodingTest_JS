const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const fields = input.slice(1);
function solution(arr: string[]): void {
  console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    let start = arr[i][0];
    for (let j = 1; j < target.length - 1; j++) {
      if (target[j] === target[j + 1]) {
        count++;
        j++;
      }
    }
  }
  console.log(count);
}

solution(fields);
