const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v: string) => +v);

function solution(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    let result = [];
    let num1 = arr[i];
    let num2 = arr[i] * 2;
    // console.log('num1 >> ', num1, 'num2 >>', num2);
    for (let i = num1 + 1; i <= num2; i++) {
      if (i <= 1) continue;
      if (i === 2) {
        result.push(i);
        continue;
      }
      let isPrime = true;
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) result.push(i);
    }
    if (result.length !== 0) {
      console.log(result.length);
    }
  }
}

solution(input);

export {};
