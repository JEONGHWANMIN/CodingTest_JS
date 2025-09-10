const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = input.shift();

function solution(n, arr = []) {
  const result = [];
  arr.reverse();
  const stack = [];

  let pushNum = 1;

  while (true) {
    const stackLastNum = stack[stack.length - 1];
    if (stackLastNum === arr[arr.length - 1]) {
      result.push("-");
      stack.pop();
      arr.pop();
    } else {
      stack.push(pushNum);
      pushNum++;
      result.push("+");
    }

    if (arr.length === 0 && stack.length === 0) return result.join("\n");

    if (
      arr[arr.length - 1] < stack[stack.length - 1] &&
      arr[arr.length - 1] < pushNum
    ) {
      return "NO";
    }
  }
}

console.log(solution(n, input.map(Number)));

// 8

// 4
// 3
// 6
// 8
// 7
// 5
// 2
// 1

// 1,2,3,4 (+,+,+,+)
// 1,2,3 (-)
// 1,2 (-)
// 1,2,5 (+)
// 1,2,5,6 (+)
// 1,2,5 (-)
// [1,2,5,7] (+)
// [1,2,,5,7,8] (+)
// [1,2,5,7] (-)
// 1,2,5 (-)
// 1,2 (-)
// 1 (-)
//  (-)

// 종료 케이스 -> stack이 다 비워졌을 때
// 비 종료 케이스 -> stack이 비워지지 않았으면서 arr[arr.length -1] < stack[stack.length - 1] && arr[arr.length -1] < pushNum(6)

//arr[arr.length -1] -> 3,  stack [3,4]
// 5
