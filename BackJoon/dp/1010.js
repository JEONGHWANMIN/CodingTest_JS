const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
//
let arr = input.map((ar) => ar.split(" "));

function solution(arr) {
  let str = "";
  for (let ar of arr) {
    str = str + binomialCoefficient(+ar[0], +ar[1]) + "\n";
  }
  console.log(str);
}

solution(arr);

function binomialCoefficient(num1, num2) {
  let parent = 1;
  let child = 1;

  for (let i = 0; i < num1; i++) {
    parent = parent * num2;
    num2--;
  }
  for (let i = num1; i > 0; i--) {
    child = child * i;
  }
  return parent / child;
}
