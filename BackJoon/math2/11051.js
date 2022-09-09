const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(num1, num2) {
  let denominator = 1;
  let molecule = 1;
  for (let i = 0; i < num2; i++) {
    denominator = denominator * num1;
    num1--;
  }
  for (let i = num2; i > 0; i--) {
    molecule = molecule * i;
  }
  console.log(denominator / molecule);
}

solution(input[0], input[1]);

/**
 * 5 4 3 2 1
 *
 */
