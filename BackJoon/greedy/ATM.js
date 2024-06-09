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
  let result = 0;
  let totalTime = 0
  const sortedTimes = times.sort((a, b) => a - b);

  for (let i = 0; i < sortedTimes.length; i++) {
    totalTime = totalTime + sortedTimes[i]
    result = result + totalTime
  }

  return result
}

console.log(solution(N, TIMES));