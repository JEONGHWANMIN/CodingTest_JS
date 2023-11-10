const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ".") {
      break;
    } else {
      result.push(isValid(array[i]) ? "yes" : "no");
    }
  }

  return result.join("\n");
}

const opener = ["(", "{", "["];
const closer = [")", "}", "]"];
const closerMap = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (opener.includes(str[i])) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      if (closerMap[stack[stack.length - 1]] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const result = solution(input);
console.log(result);
