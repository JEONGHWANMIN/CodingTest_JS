const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((str) => str.replace("\r", ""));

function solution(arr) {
  let result = "";
  const maxLen = Math.max(...arr.map((i) => i.length));

  for (let i = 0; i < maxLen; i++) {
    let temp = "";
    for (let j = 0; j < arr.length; j++) {
      temp = temp + (arr[j][i] || "");
    }
    result += temp;
  }

  return result.trim();
}

const result = solution(input);

console.log(result);
