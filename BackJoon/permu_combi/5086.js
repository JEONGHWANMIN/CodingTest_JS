const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];
let arr = input.map((el) => el.split(' '));

function 약수확인(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

function solution(arr) {
  let a = +arr[0];
  let b = +arr[1];
  // 약수인지 확인
  if (a < b) {
    let ar = 약수확인(b);
    if (ar.includes(a)) {
      return 'factor';
    }
  } else {
    let ar = 약수확인(a);
    if (ar.includes(b)) {
      return 'multiple';
    }
  }
  return 'neither';
}

while (true) {
  const ar = arr.shift();
  if (ar[0] === '0' && ar[1] === '0') break;

  let res = solution(ar);
  result.push(res);
}

console.log(result.join('\n'));
