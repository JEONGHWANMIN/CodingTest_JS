const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

const one: any[] = [];
const two: any[] = [];
const three: any[] = [];
for (let i = 1; i <= input; i++) {
  one.push(i);
}

/*
하노이탑 
1. 첫번쨰 one 배열에 자기 자신만 남은 경우(맨밑에 큰  벽돌)무조건 3으로 가야한다. 
2. 
*/
// [1,2,3]
// [3] [2] [1]
function recuresion(num: number): any {
  if (one.length === 1) {
    const last = one.pop();
    three.push(last);
  }
  if (two[0] > num) two.push(num);

  recuresion(+input);
}

export {};
