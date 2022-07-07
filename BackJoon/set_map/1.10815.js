const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();
const decks = input
  .shift()
  .split(' ')
  .map((v) => +v);

const M = input.shift();
const cards = input
  .shift()
  .split(' ')
  .map((v) => +v);

function solution(arr1, arr2) {
  let answer = [];
  const deck = new Set([...arr1]);
  for (let el of arr2) {
    deck.has(el) ? answer.push(1) : answer.push(0);
  }
  return answer.join(' ');
}

console.log(solution(decks, cards));

// set 사용
// 이진탐색 방법도 있음
