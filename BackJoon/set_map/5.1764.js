const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input
  .shift()
  .split(' ')
  .map((v) => +v);

const no_hear = input.slice(0, n);
const no_see = input.slice(n);

function solution(no_hear, no_see) {
  const answer = [];
  const no_hearSet = new Set(no_hear);
  const no_seeSet = new Set(no_see);

  no_hearSet.forEach((v1) => {
    if (no_seeSet.has(v1)) {
      answer.push(v1);
    }
  });

  answer.sort();
  answer.unshift(answer.length);
  return answer.join('\n');
}

console.log(solution(no_hear, no_see));
