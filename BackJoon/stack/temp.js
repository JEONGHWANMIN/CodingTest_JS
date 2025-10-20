const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.replace("\r", ""));

const arr = input[0].split("");

function solution(arr) {
  const lazer = [];
  const stick = [];

  const pair = {
    "(": ")",
    ")": "(",
  };

  const tempStack = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempStack.length === 0) {
      tempStack.push({ index: i, char: arr[i] });
    } else {
      const poped = tempStack[tempStack.length - 1];
      if (poped === "(" && arr[i] === ")") {
      }
    }
  }
}
