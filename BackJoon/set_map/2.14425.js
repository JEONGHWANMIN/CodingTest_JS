const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input
  .shift()
  .split(' ')
  .map((v) => +v);
let M = input.slice(0, n);
let S = input.slice(n);

function solution(M, S) {
  let setS = new Set([...M]);
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (setS.has(S[i])) count++;
  }
  return count;
}

console.log(solution(M, S));
/*
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
*/
// 위 단어가 아래에 들어 있는지 확인
/*
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink
*/

// S는 중복되는게 없다고 문제에 적혀있는데 S에 Set을 걸려고함 ... 내 실 수 ... 문제를 잘 읽어보자 !
