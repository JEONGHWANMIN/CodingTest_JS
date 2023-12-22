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
  let weight = -Infinity;

  ropes.sort((a, b) => b - a);

  const rope_len = ropes.length;

  let idx = 0;
  while (idx < rope_len) {
    // 이게 제일 작은 값
    const cur_rope_len = ropes.length;
    const lastRope = ropes.pop();
    const use_weight = lastRope * cur_rope_len;

    weight = Math.max(weight, use_weight);

    idx++;
  }

  return weight;
}

console.log(solution(n, ropes));
