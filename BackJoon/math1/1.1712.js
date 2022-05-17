const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v) => +v);

// function solution(arr) {
//   if (arr[1] > arr[2]) return -1;
//   let count = 1;
//   let resultCost = arr[0] + arr[1];
//   let variableCost = arr[2];
//   while (true) {
//     // 더해지는 숫자가 arr[1] 이 더 크게되면 무조건 resultCost가 항상 큼으로 -1
//     resultCost = resultCost + arr[1];
//     variableCost = variableCost + arr[2];
//     count++;
//     if (resultCost < variableCost) return count;
//   }
// }

// 배운점 : 입력값이 말도 안되게 크면 반복문 쓰는게 아닌 다른 풀이로 풀리는 문제 유형이 많은 것 같다.
// -> 무조건 for문부터 돌리지 말고 문제에 대해서 어떻게 접근해야하는지 생각하는 힘을 좀 더 길러야겠다...
// 1000 70 170 breakPoint = 10
// C-B 를 뺀 마진 값으로 A를 나누면 ((고정지출 + 가변지출 ) === 판매지출) 같아지는 갯수가 나오는데 breakPoint 는 판매지출이
// 더 커지는 상황이므로 +1을 해준다.
function solution(arr) {
  const [A, B, C] = arr;
  let margin = C - B;
  if (C - B <= 0) return -1;
  return Math.floor(A / margin) + 1;
}

// 시간초과 뭥미 ?
console.log(solution(input));
