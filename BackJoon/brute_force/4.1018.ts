const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const fields = input.slice(1);
function solution(arr: string[]): void {
  let count = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[arr.length - 1]);
    let start = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

solution(fields);
