const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

const arr = input[0].split(' ').map((v) => +v);

function helper(A, B) {
  let i;
  while (true) {
    for (i = 2; true; i++) {
      if (A <= i && B <= i) return [A, B];
      if (A % i === 0 && B % i === 0) {
        A = A / i;
        B = B / i;
        break;
      }
    }
  }
}

function solution(target, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (target % arr[i] === 0) {
      result.push(`${target / arr[i]}/1`);
    } else {
      let [a, b] = helper(target, arr[i]);
      result.push(`${a}/${b}`);
    }
  }
  return result.join('\n');
}

console.log(solution(arr[0], arr.slice(1)));
