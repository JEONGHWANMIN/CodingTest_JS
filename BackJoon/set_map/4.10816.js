const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, card1, m, card2] = input;

card1 = card1.split(' ').map((v) => +v);
card2 = card2.split(' ').map((v) => +v);

function solution(card1, card2) {
  let answer = [];
  const card1Count = {};

  for (let el of card1) {
    card1Count[el] = (card1Count[el] || 0) + 1;
  }

  for (let el of card2) {
    if (card1Count[el] !== undefined) answer.push(card1Count[el]);
    else answer.push(0);
  }

  return answer.join(' ');
}

console.log(solution(card1, card2));
