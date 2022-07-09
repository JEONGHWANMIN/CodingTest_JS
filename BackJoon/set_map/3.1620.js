const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ');
const problems = input.slice(0, n);
const solutions = input.slice(n);

function isNumber(str) {
  return str == +str;
}

function solution(problems, solutions) {
  let answer = [];
  let poketmonName = new Map();
  let poketmonNum = new Map();

  for (let i = 0; i < problems.length; i++) {
    poketmonName.set(problems[i], i + 1);
    poketmonNum.set(i + 1, problems[i]);
  }

  for (let el of solutions) {
    if (isNumber(el)) {
      answer.push(poketmonNum.get(+el));
    } else {
      answer.push(poketmonName.get(el));
    }
  }

  return answer.join('\n');
}

console.log(solution(problems, solutions));
