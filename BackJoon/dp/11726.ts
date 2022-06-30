const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

/*
n === 1 -> 1
n === 2 -> 2
n === 3 -> 3
n === 4 -> 5
*/

function tiling(n: number) {
  const memo = [...Array(1000)];
  memo[0] = 1;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }
  console.log(memo[n]);
}

tiling(+input);
