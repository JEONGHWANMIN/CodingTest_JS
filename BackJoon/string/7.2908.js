const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(arr) {
  let input1 = arr[0].split('').reverse();
  let input2 = arr[1].split('').reverse();

  input1 = Number(input1.join(''));
  input2 = Number(input2.join(''));

  if (input1 > input2) return input1;
  if (input1 < input2) return input2;
  return input1;
}

console.log(solution(input));
