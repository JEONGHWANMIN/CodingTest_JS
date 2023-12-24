const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const TIMES = input[1].split(" ").map(Number);

/**
 *
 * @param {*} n
 * @param {*} times
 * 문제 : ATM 시간을 기다리는 최소화 된 시간을 알고 싶음
 * 기다리는 시간을 짧은 시간부터 정렬 함
 * 정렬된 구간합을 구한다.
 */
function solution(n, times) {
  console.log(n, times);
  console.log(1 + 3 + 6 + 9 + 13);
}

console.log(solution(N, TIMES));

// [3,1,4,3,2]

// 2 5 1 4 3

// 1 2 3 3 4

// 1 + 2 + 3 + 3 + 4

// 1 + 3 + 6 + 9 + 13
