// 문제: https://www.acmicpc.net/problem/1439

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const coins = input[0]
/**
 * 0. 뒤집기가 가능한 지 찾는다.
 * 1. [0, 1] 중에 적은걸 찾는다.
 * 2. 연속된 수중에서 가장 많은 반복 구간을 찾는다.
 * 3. 가장 반복이 많은 구간을 뒤집는다.
 */
function solution(coins) {
    const toOne = coins.split("0").filter((x) => x !== "")
    const toZero = coins.split("1").filter((x) => x !== "")

    return Math.min(toZero.length, toOne.length)
}

console.log(solution(coins));

