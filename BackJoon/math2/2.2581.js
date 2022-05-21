const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
function solution(arr) {
  const A = +arr[0];
  const B = +arr[1];
  // 만약 A 이상 B 이하 값이 소수라면 result [] 추가
  let result = [];
  for (let i = A; i <= B; i++) {
    let decimal_check = true;
    if (i === 1) continue;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        decimal_check = false;
        break;
      }
    }
    if (decimal_check === true) {
      result.push(i);
    }
  }
  if (result.length === 0) return [-1];
  let sum = result.reduce((pre, cur) => {
    return pre + cur;
  });
  return [sum, Math.min(...result)];
}

let arr = solution(input);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
