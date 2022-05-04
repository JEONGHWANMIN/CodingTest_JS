const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

let arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function solution(s) {
  let result_arr = Array.from({ length: 26 }).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    let idx = arr.indexOf(s[i]);
    let arr_idx = s.indexOf(arr[idx]);
    result_arr[idx] = arr_idx;
  }

  // 정답 배열 출력
  let result = '';
  for (let i = 0; i < result_arr.length; i++) {
    if (i === result_arr.length - 1) {
      result = result + result_arr[i];
    } else {
      result = result + result_arr[i] + ' ';
    }
  }
  return result;
}

// function solution(s) {
//   let input = s.split('');

//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(input.findIndex((el) => el === arr[i]));
//   }
// }
// https://junghyeonsu.tistory.com/173
console.log(solution(input));
