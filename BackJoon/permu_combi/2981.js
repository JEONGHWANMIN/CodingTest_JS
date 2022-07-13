const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(+input.shift());
}

// 먼저 근처에 보이는 숫자 N개를 종이에 적는다. 그 다음, 종이에 적은 수를 M으로 나누었을 때, 나머지가 모두 같게 되는 M을 모두 찾으려고 한다. M은 1보다 커야 한다.
// N개의 수가 주어졌을 때, 가능한 M을 모두 찾는 프로그램을 작성하시오.
// N : (2 ≤ N ≤ 100)
function solution(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length - 1; i++) {
    let gcd = GCD(arr[i], arr[i + 1]);
    set.add(gcd);
  }
  let lpm = [];
  for (let i = 0; i < arr.length - 1; i++) {
    lpm.push(arr[i] * arr[i + 1]) / 2;
  }
  console.log(set);
  console.log(lpm);
}

solution(arr);

function GCD(A, B) {
  if (A % B === 0) return B;
  return GCD(B, A % B);
}

const result = GCD(34, 38);
console.log(result);
