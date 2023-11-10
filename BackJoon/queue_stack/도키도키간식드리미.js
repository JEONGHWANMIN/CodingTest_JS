const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let target = 1;

  const stack = [];
  while (input.length) {
    if (Number(input[0]) === target) {
      input.shift();
      target++;
    } else if (stack.length && Number(stack[stack.length - 1]) === target) {
      stack.pop();
      target++;
    } else {
      stack.push(input.shift());
    }
  }

  if (stack.length > 0) {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (Number(stack[i]) === target) {
        stack.pop();
        target++;
      }
    }
  }

  return stack.length === 0 ? "Nice" : "Sad";
}

const result = solution(input[1].split(" "));

console.log(result);
