const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input[0].split(' ').map((v) => +v);

function solution(arr) {
  let answer = [];
  const set = new Set(arr);
  let setArr = [...set].sort((a, b) => a - b);
  let dic = {};

  setArr.forEach((el, idx) => (dic[el] = idx));

  for (let i = 0; i < arr.length; i++) {
    answer.push(dic[arr[i]]);
  }

  return answer.join(' ');
}

let result = solution(arr);
// console.log(result);
console.log(result);
