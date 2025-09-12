const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.replace("\r", ""));

const n = Number(input.shift());
const arr = input[0].split(" ").map(Number);

function solution(n, arr = []) {
    const result = [];
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        const curNum = arr[i];

        // 1. 나보다 작은 값은 pop
        // 2. 나보다 큰 값 발견 시 stop 오큰수 발견
        while (stack.length && stack[stack.length - 1] <= curNum) {
            stack.pop();
        }

        const resultNum =
            stack[stack.length - 1] > curNum ? stack[stack.length - 1] : -1;
        result.push(resultNum);
        stack.push(curNum);
    }

    result.reverse();

    return result.join(" ");
}

console.log(solution(n, arr));

/**
 * 오른쪽부터 순회 -> 만약 나보다 작은 값이 있으면 어처피 내가 제일 큰 값이기 때문에 stack에서 제거 해야함
 * 오큰수: 오른쪽에 있으면서 나보다 (큰 수)중 가장 왼쪽에 있는 숫자
 *
 */
