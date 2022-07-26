const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();

const [row, col, k] = input.shift().split(' ');

let answer = [];
for (let i = 0; i < col; i++) {
  let temp = [];
  for (let j = 0; j < row; j++) {
    temp.push(0);
  }
  answer.push(temp);
}

console.log(answer);

for (let i = 0; i < k; i++) {
  const [x, y] = input.shift().split(' ');
  answer[x][y] = 1;
}

console.log(answer);
