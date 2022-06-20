const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
input.sort((a: number, b: number) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}

export {};
