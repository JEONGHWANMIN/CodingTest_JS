const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

/*
https://ourcalc.com/%EC%86%8C%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4-%EA%B3%84%EC%82%B0%EA%B8%B0/
function solution(num) {
  // 약수 구하기

  let result = [];
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j < num; j++) {
      if (!result.includes(i) && i * j === num) {
        result.push(i);
      }
    }
  }

  // 약수들 중 소수만 구하기
  for (let i = 0; i < result.length; i++) {
    for (let j = 2; j < result[i]; j++) {
      if (result[i] === 2) {
        continue;
      }
      if (result[i] % j === 0) {
        result = result.filter((el) => el !== result[i]);
      }
    }
  }

  // 약수중 소수로 Input 값을 나누어서 소인수 분해를 시작한다.
  let arr = [];
  let idx = 0;
  while (num > 1) {
    if (num % result[idx] === 0) {
      num = num / result[idx];
      arr.push(result[idx]);
    } else {
      idx++;
    }
  }
  return arr;
}

let result = solution(+input);
for (let val of result) {
  console.log(val);
}
*/

function solution2(num) {
  while (num > 1) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        num = num / i;
        console.log(i);
        break;
      }
    }
  }
}

solution2(+input);
