const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let leftIndex = 0;
  let rightIndex = input.length - 1;

  while (leftIndex < rightIndex) {
    if (input[leftIndex] !== input[rightIndex]) return 0;
    leftIndex++;
    rightIndex--;
  }

  return 1;
}

const result = solution(input);

console.log(result);
