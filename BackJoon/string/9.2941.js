const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let coratian_arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function solution(str) {
  for (let i = 0; i < coratian_arr.length; i++) {
    str = str.replaceAll(coratian_arr[i], '@');
  }
  return str.length;
}

console.log(solution(input));
