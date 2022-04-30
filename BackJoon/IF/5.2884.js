const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let curHour = input[0].split(' ')[0];
let curMin = input[0].split(' ')[1];
let cookTime = input[1];

solution(+curHour, +curMin, +cookTime);

function solution(h, m, time) {
  m += time;
  h = Math.floor(h + m / 60);
  while (true) {
    if (h < 24 && m < 60) break;
    if (h >= 24) h -= 24;
    if (m >= 60) m = m % 60;
  }
  console.log(`${h} ${m}`);
}
