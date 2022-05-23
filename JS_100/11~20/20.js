// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

function solution(a, b) {
  let ab = a / b;
  let rest = a % b;
  return ab + ' ' + rest;
}

console.log(solution(10, 2));
