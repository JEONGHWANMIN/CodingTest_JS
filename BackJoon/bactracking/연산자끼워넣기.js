const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numArr = input[1].split(" ").map((v) => +v);
const operCount = input[2].split(" ").map((v) => +v);

/**
 *
 * 출력 : 첫번 째 "최댓값" 두번 째 "최소값"
 *
 * 문제풀이
 * 숫자 1,2번째에 연산자 값을 계산하고 연산자 값을 마이너스 시킨다.
 * DFS 탐색을 끝내면 다시 연산자 값을 하나 올린다.
 * 1+2+3-4×5÷6
 * count = 1 (1+2)
 * count = 2 (1+2) + 3
 * count = 3 (1+2) + 3 - 4
 * count = 4 (1+2) + 3 - 4 * 5
 * count = 5 (1+2) + 3 - 4 * 5 / 6
 */

function calculateSum(num1, num2, operatorIndex) {
  if (operatorIndex === 0) return num1 + num2;
  if (operatorIndex === 1) return num1 - num2;
  if (operatorIndex === 2) return num1 * num2;
  if (operatorIndex === 3) {
    const result =
      num1 >= 0 ? Math.floor(num1 / num2) : -Math.floor(-num1 / num2);
    return result;
  }
}

function solution(numbers, operator) {
  let min = Infinity;
  let max = -Infinity;

  const dfs = (sum, operator, count) => {
    // 종료조건
    if (count === N - 1) {
      min = Math.min(min, sum);
      max = Math.max(max, sum);
      return;
    }

    // 재귀조건
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === 0) continue;
      const calc_sum = calculateSum(sum, numbers[count + 1], i);
      operator[i] = operator[i] - 1;
      dfs(calc_sum, operator, count + 1);
      operator[i] = operator[i] + 1;
    }
  };

  dfs(numbers[0], operator, 0);

  return `${max}\n${min}`;
}

console.log(solution(numArr, operCount));
