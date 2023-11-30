const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

function solution(board) {
  console.log("Board", board);
}

console.log(solution(input));
