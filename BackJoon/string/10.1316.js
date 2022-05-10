const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = 0;
let Case = input[0];

function groupWordCheker(word) {}

for (let i = 1; i < Case; i++) {
  result = result + groupWordCheker(input[1]);
}

let arr = [1, 2, 3, 4, 5];
