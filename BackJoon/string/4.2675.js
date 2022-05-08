const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let Case = Number(input[0]);

function solution(arr) {
  // split으로 쪼개진 배열 이 들어온다. [number , string]
  let num = Number(arr[0]);
  let str = arr[1];
  let result = '';
  // 각 문자를 repeat 매서드를 이용해서 num번 만큼 반복
  for (let i = 0; i < str.length; i++) {
    result = result + str[i].repeat(num);
  }
  return result;
}

// input 0번 Case만큼 반복문 
for (let i = 1; i <= Case; i++) {
  console.log(solution(input[i].split(' ')));
}
