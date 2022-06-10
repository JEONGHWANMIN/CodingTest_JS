const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const fields = input.slice(1);
function solution(arr: string[]): void {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    for (let j = 0; j < target.length; j++) {
      console.log(target[j]);
    }
  }
}

solution(fields);
