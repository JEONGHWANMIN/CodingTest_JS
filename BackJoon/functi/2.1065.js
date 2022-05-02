const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

let count = 0;

function han(num) {
  // 99보다 작으면 차를 알 수 없으니 count++
  if (num <= 99) {
    count++;
    return;
  }
  /* 
    숫자 각 자리수 비교를 위해서 문자열로 바꾸고 처음에 0-1 차를 비교
    처음 두자리 gap 비교후 그 후 자릿수를 처음 gap과 비교 , 다르면 바로 반복문 중지 
    반복문이 다 돌고 result = true 이면 카운터 ++
   */
  let strN = num + '';
  let gap = +strN[0] - +strN[1];
  let result = true;

  for (let i = 1; i < strN.length - 1; i++) {
    if (gap !== +strN[i] - +strN[i + 1]) {
      result = false;
      break;
    }
  }

  if (result) {
    count++;
  }
}

for (let i = 1; i <= +input; i++) {
  han(i);
}

console.log(count);
