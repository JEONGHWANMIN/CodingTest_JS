const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 1,2,3,4,5
// 1,2,3,4,5
function solution(input) {
  return Number(input) * Number(input - 1);
}

console.log(solution(input));
