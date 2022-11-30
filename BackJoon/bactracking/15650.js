const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(input);

function solution(num, len) {
  console.log("Start");
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  console.log(arr);
}

solution(4);
