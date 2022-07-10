const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input
  .shift()
  .split(' ')
  .map((v) => +v);

const A = input
  .shift()
  .split(' ')
  .map((v) => +v);

const B = input
  .shift()
  .split(' ')
  .map((v) => +v);

function solution(nums1, nums2) {
  let answer = [];

  let setA = new Set(nums1);
  let setB = new Set(nums2);

  setA.forEach((val) => {
    if (!setB.has(val)) {
      answer.push(val);
    }
  });

  setB.forEach((val) => {
    if (!setA.has(val)) {
      answer.push(val);
    }
  });

  return answer.length;
}

console.log(solution(A, B));
