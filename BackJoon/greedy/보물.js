const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

/**
 *
 * @param {*} n
 * @param {*} a
 * @param {*} b
 * 문제 : 각 배열을 곱했을 때 합이 가장 작은 수를 구하는 문제
 * "조건" : B배열은 재 정렬할 수 없다.
 * B배열에 제일 큰 값에 A배열의 가장 작은 값을 곱한다.
 * 끝까지 순회한다.
 *
 */
function solution(n, array_a, array_b) {
  let S = 0;

  const copy_array_b = array_b.slice().sort((a, b) => b - a);
  const sort_array_a = array_a.sort((a, b) => a - b);

  // a배열에서 가장 작은 값 * b배열에서 가장 큰 값
  for (let i = 0; i < n; i++) {
    const multiple = copy_array_b[i] * sort_array_a[i];
    S = S + multiple;
  }

  return S;
}

console.log(solution(N, A, B));
