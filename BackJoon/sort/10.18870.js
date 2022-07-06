const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input[0].split(' ');

// 좌표가 0 ~ N 까지 생성됨
// 제일 작은 수 부터 0이라는 좌표가 부여됨
// 출력 : 원본 배열 숫자에 좌표값일 대입해서 출력한다.
function solution(arr) {}

solution(arr);
