const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const Case = +input[0];

for (let i = 1; i <= Case; i++) {
  console.log(solution(input[i].split(' ').map((v) => +v)));
}

function solution(arr) {
  const [h, w, n] = arr;
  let hn = Math.ceil(n / h);
  let rest = n % h;
  if (rest === 0) rest = h;
  if (hn < 10) {
    hn = '0' + hn;
  }
  return Number(rest + String(hn));
}
