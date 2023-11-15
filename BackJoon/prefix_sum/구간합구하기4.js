const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(numbers, inputs) {
  let result = "";
  const answer = [];
  const sums = [0];

  for (let i = 0; i < numbers.length; i++) {
    sums.push(sums[sums.length - 1] + numbers[i]);
  }

  for (let input of inputs) {
    const [start, end] = input.split(" ").map(Number);
    answer.push(sums[end] - sums[start - 1]);
  }

  return answer.join("\n");
}

console.log(solution(input[1].split(" ").map(Number), input.slice(2)));
