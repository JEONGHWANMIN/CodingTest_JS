const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const [n, m] = input.shift().split(" ").map(Number);
const arr = input;

function solution(n, m, arr) {
  let que = [];
  const checkmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (checkmap.has(num)) {
      const index = checkmap.get(num);
      que[index] = null;
      checkmap.set(num, i);
    } else {
      checkmap.set(num, i);
    }

    que.push(num);
  }

  const filteredQue = que.filter((num) => num);

  return filteredQue.slice(0, n).join("\n");
}

console.log(solution(n, m, arr));

/**
 * 
 * 20103324
20133221
20133221
20093778
20140101
01234567
20093778
20103325
 * 
 */
