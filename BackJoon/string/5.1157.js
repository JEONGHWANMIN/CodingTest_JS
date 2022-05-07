const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

// console.log(input);

function solution(str) {
  str = str.toLowerCase();
  let str_Counter = {};
  for (let i = 0; i < str.length; i++) {
    str_Counter[str[i]] = (str_Counter[str[i]] | 0) + 1;
  }
  // 이게되네 ?
  let max = Math.max(...Object.values(str_Counter));
  let count = 0;
  // count 가 2가 되면 가장 많이 사용된 알파벳이 여러개라는 이유기 때문에 return '?'
  for (let values of Object.values(str_Counter)) {
    if (values === max) count++;
    if (count >= 2) return '?';
  }
  // 앞에서 중복 체크를 했기 때문에 values가 최댓값인 key값을 찿아서 대문자로 리턴
  for (let key in str_Counter) {
    if (str_Counter[key] === max) return key.toUpperCase();
  }
}

console.log(solution(input));
