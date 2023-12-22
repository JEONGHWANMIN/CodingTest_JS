const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

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

// function solution(s) {
//   let result_arr = Array.from({ length: 26 }).fill(-1);
//   // baekjoon
//   for (let i = 0; i < arr.length; i++) {
//     let idx = arr.indexOf(s[i]);
//     let arr_idx = s.indexOf(arr[idx]);
//     result_arr[idx] = arr_idx;
//   }

//   let result = '';
//   for (let i = 0; i < result_arr.length; i++) {
//     if (i === result_arr.length - 1) {
//       result = result + result_arr[i];
//     } else {
//       result = result + result_arr[i] + ' ';
//     }
//   }
//   return result;
// }

// findIndex()
// join()
function solution(s) {
  let input = s.split('');
  const answer = [];
  /*
    a 부터 시작해서 각각 알파벳 하나하나를 input배열 전체와 비교
  */
  //  a
  //  backjoon
  for (let i = 0; i < arr.length; i++) {
    let result = input.findIndex((value) => value === arr[i]);
    answer.push(result);
  }
  return answer.join(' ');
}

console.log(solution(input));

// 1 3 2 -1 -1 -1 -1 -1 -1 -1 6 -1 0 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
// 1 3 2 -1 -1 -1 -1 -1 -1 -1 6 -1 0 -1 4 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
