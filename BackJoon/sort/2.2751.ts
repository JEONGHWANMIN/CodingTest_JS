const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
input.sort((a: number, b: number) => a - b);

let result = '';
for (const element of input) {
  result = result + element + '\n';
}

console.log(result);
export {};
