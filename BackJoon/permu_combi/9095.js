const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

let arr = input.map((v) => +v);

const memo = [...Array(11)];

memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

function solution(nums) {
  let result = [];
  for (let i = 4; i <= 10; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  while (nums.length > 0) {
    let poped = nums.shift();
    result.push(memo[poped]);
  }

  return result.join('\n');
}

console.log(solution(arr));
