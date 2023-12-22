const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace("\r", ""));

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

/**
 *
 * @param n 동전 숫자
 * @param k 만들어야 하는 숫자
 * @param coins 동전 종류
 *
 * 문제 : k원을 만들어야 하는 최소한의 동전 개수 구하기
 * 가지고 있는 동전 종류중 제일 큰 숫자로 만들어야 하는 숫자를 나눈다.
 * 1. 동전 종류중 k원 보다 같거나 작은 숫자 찾기
 * 2. 작은 숫자를 찾으면 그 숫자로 coins를 나누고 몫은 결과값에 더하고 나머지 값은 k원을 업데이트 시켜준다.
 * 3. k원을 찾을 때 까지 반복한다.
 */
function solution(n, k, coins) {
  let result = 0;

  while (k !== 0) {
    for (let i = n - 1; i >= 0; i--) {
      if (coins[i] > k) continue;
      result = result + Math.floor(k / coins[i]);
      k = k % coins[i];
    }
  }

  return result;
}

console.log(solution(N, K, coins));
