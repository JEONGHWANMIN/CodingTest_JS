const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// https://junghyeonsu.tistory.com/196
const numArr = input[1].split(" ").map((v) => +v);

// 덧샘 뺄샘 곱셈 나눗셈
const operCount = input[2].split(" ").map((v) => +v);

/**
 *
 * 출력 : 첫번 째 "최댓값" 두번 째 "최소값"
 *
 * 문제풀이
 * 숫자 1,2번째에 연산자 값을 계산하고 연산자 값을 마이너스 시킨다.
 * DFS 탐색을 끝내면 다시 연산자 값을 하나 올린다.
 *
 *
 */
function solution(numbers, operator) {
  let min = 0;
  let max = 0;
  console.log("numbers", numbers);
  console.log("operator", operator);

  const dfs = () => {};

  for (let i = 0; i < operator.length; i++) {
    // 연산자를 하나 빼고 넘긴다.
    dfs(sum, operator, oper_count);
    // 연산자를 다시 추가한다.
  }

  return `${max}\n${min}`;
}

console.log(solution(numArr, operCount));
