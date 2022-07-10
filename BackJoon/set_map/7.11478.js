const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

// ababc
// 1 a b a b c
// 2 ab ba ab bc
// 3 aba bab abc
// 4 abab babc
// 5 ababc

// -> 반복문은 문자열 갯수 만큼 반복
// =>

function solution(str) {
  let answer = new Set();
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      answer.add(str.slice(j, j + i));
    }
  }
  return answer.size;
}

console.log(solution(input));
