/*
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined
*/

// 1 = true
// 2) True
// 0 = false 1 = true
let i = 0;
while (0) {
  console.log(i);
  i++;
}

console.log(typeof NaN);
