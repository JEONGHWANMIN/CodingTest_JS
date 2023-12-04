const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.replace("\r", ""));

const [N, M, R] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((arr) => arr.split(" ").map(Number));

function solution(graph) {}

console.log(solution(graph));
