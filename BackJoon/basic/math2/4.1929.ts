const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v: string) => +v);

// function solution(arr: number[]) {
//   const [num1, num2]: number[] = arr;
//   for (let i = num1; i <= num2; i++) {
//     let decimal_check: boolean = true;
//     if (i === 1) continue;
//     if (i === 2) {
//       console.log(i);
//       continue;
//     }
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         decimal_check = false;
//         break;
//       }
//     }
//     if (decimal_check) {
//       console.log(i);
//     }
//   }
// }
// solution(input);

// 제곱근 이용한 소수 구하기
function getPrimeE(arr: number[]): any {
  const [num1, num2] = arr;
  let result = [];
  for (let i = num1; i <= num2; i++) {
    if (i === 1) continue;
    if (i === 2) {
      result.push(i);
      continue;
    }
    let sqlt = Math.ceil(Math.sqrt(i));
    let prime = true;
    for (let j = 2; j <= sqlt; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      result.push(i);
    }
  }
  return result;
}

getPrimeE(input).map((val: number) => {
  console.log(val);
});

export {};
