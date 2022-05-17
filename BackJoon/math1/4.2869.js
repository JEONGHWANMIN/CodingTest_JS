const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((num) => +num);

function solution(arr) {
  let [a, b, v] = arr;
  let high = v - a;
  let day = a - b;

  // 나눠 떨어지면 소수점이 안나오므로 Math.ceil처리를 해줄 필요가 없음
  if (high % day === 0) {
    return high / day + 1;
  } else {
    return Math.ceil(high / day + 1);
  }
}

console.log(solution(input));
