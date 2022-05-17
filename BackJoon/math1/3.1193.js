const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

// 규칙 못찿아서 규칙부분만 인터넷 참고함....
// https://www.youtube.com/watch?v=bEQq9jvU_Hg
// -> 영상에서는 인덱스 구한 후 n(n+1)/2 공식을 사용해서 sum값을 바로 알아냄
function solution(num) {
  let sum = 0;
  let idx = 0;
  //  어느 행에 들어갈지 idx값을 구해야 한다.
  // num 이 인덱스에서 몇번째 인지 알기위해서 sum 값도 구해준다.
  for (idx = 1; sum < num; idx++) {
    // sum=1 idx=1 , sum=3,idx=2 , sum=6,idx=3 , sum=10,idx=4 ......
    sum = sum + idx;
  }
  // for문 후 idx = idx++이 되어 있기 때문에 다시 -1을 해준다.
  idx = idx - 1;

  // 현재 num이 인덱스에 몇번째 위치인지 알려준다.
  let position = sum - num;

  // 짝수번째는 분모가 인덱스 부터 시작 , 홀수번째는 분자가 인덱스 부터 시작
  if (idx % 2 === 0) {
    return `${idx - position}/${position + 1} `;
  } else {
    return `${position + 1}/${idx - position} `;
  }
}

console.log(solution(+input));
