const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const [n, m] = input;

const arr = Array.from({ length: n }, (_, i) => i + 1);
const visit = Array.from({ length: n + 1 }).fill(false);

let result = [];

function recur(num) {
  if (num === m) {
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visit[i] === false) {
      visit[i] = true;
      result.push(i);
      recur(num + 1);
    }
  }
}

recur(0);

console.log(result);
