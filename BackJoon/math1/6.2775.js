const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 백준 테스트케이스 개빡친다 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
const Case = +input.shift();

//  1 3
function solution(floor, room) {
  const floor_zero = [];
  // floor room 을 알려면 0층 room까지의 합
  for (let i = 1; i <= room; i++) {
    floor_zero.push(i);
  }
  // [1,2,3] 0층
  // [1,3,6] 1층
  // [1,4,10] 2층
  if (floor === 0) {
    return floor_zero[room - 1];
  }

  for (let i = 1; i <= floor; i++) {
    let result = 0;
    const result_arr = [];
    for (let j = 0; j < room; j++) {
      result = result + floor_zero[j];
      result_arr.push(result);
    }
    // 기존 0층 배열에 이번층 합을 복사하는 부분
    for (let i = 0; i < floor_zero.length; i++) {
      floor_zero[i] = result_arr[i];
    }
  }
  return floor_zero.at(-1);
}

for (let i = 0; i < Case; i++) {
  let a = +input.shift();
  let b = +input.shift();
  console.log(solution(a, b));
}
