const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const ropes = input.slice(1).map(Number);

/**
 *
 * @param {*} n
 * @param {*} ropes
 * 최대 중량을 구해야 한다.
 * 로프 숫자에서 최저값을 알아낸 다음에 해당 최저값을 로프 개수로 곱한 값이 들 수 있는 가장 큰 무개가 된다.
 *
 */
function solution(n, ropes) {
  let WEIGHT = 100000;

  // ropes에 가장 작은 값을 찾아야하는데 만약 0이라면 ?

  while (true) {
    const distribute_weight = WEIGHT / ropes.length;
  }
}

console.log(solution(n, ropes));
