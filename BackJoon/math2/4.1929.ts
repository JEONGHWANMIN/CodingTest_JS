const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v: string) => +v);

function solution(arr: number[]) {
  const [num1, num2]: number[] = arr;
  for (let i = num1; i <= num2; i++) {
    let decimal_check: boolean = true;
    if (i === 1) continue;
    if (i === 2) {
      console.log(i);
      continue;
    }
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        decimal_check = false;
        break;
      }
    }
    if (decimal_check) {
      console.log(i);
    }
  }
}

solution(input);
