const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v: string) => +v);

console.log(input);

function solution(arr: number[]): void {
  // 1. 짝수를 찿는다.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue;
    let result = [];
    console.log('Target >> ', arr[i]);
    // 2.약수중에 두 소수 차이가 가장 작은 것을 출력한다.
  }
}

solution(input);

export {};
