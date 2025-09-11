const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace('\r', ''));

const n = Number(input.shift())

function solution() {
}

console.log(solution(n, input));
