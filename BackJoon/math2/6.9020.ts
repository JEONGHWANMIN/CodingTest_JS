const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v: string) => +v);
function solution(arr: number[]): void {
  // 1. 짝수를 찿는다. [3,8,10,16]
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    let result = [];
    // 홀수면 넌 못 지나간다!
    if (target % 2 !== 0 || target <= 2) continue;
    result.push(2);
    // target 보다 작은 소수 구하기
    for (let j = 3; j < target; j++) {
      let decimal = true;
      for (let k = 2; k <= Math.ceil(Math.sqrt(j)); k++) {
        if (j % k === 0) {
          decimal = false;
          break;
        }
      }
      if (decimal) {
        result.push(j);
      }
    }
    // console.log(target, result);

    // 소수차이 구하기
    let dif_arr = [];
    let dif = Math.abs(result[0] - result[result.length - 1]);
    for (let m = 0; m < result.length; m++) {
      for (let j = m; j < result.length; j++) {
        if (
          result[m] + result[j] === target &&
          dif > Math.abs(result[m] - result[j])
        ) {
          dif = Math.abs(result[m] - result[j]);
          (dif_arr[0] = result[m]), (dif_arr[1] = result[j]);
        }
      }
    }
    console.log(dif_arr[0] + ' ' + dif_arr[1]);
  }
}

solution(input);

export {};
