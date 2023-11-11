const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n, k) {
  const result = [];
  const que = Array.from({ length: n }, (_, i) => i + 1);

  let count = 0;
  while (que.length) {
    count++;

    if (count === k) {
      const popped = que.shift();
      result.push(popped);
      count = 0;
    } else {
      const popped = que.shift();
      que.push(popped);
    }
  }

  return `<${result.join(", ")}>`;
}

const inputArr = input.split(" ").map(Number);
const result = solution(Number(inputArr[0]), Number(inputArr[1]));

console.log(result);
