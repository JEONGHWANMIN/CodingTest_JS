const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// https://junghyeonsu.tistory.com/196
const numArr = input[1].split(" ").map((v) => +v);

// 덧샘 뺄샘 곱셈 나눗셈
const operators = ["+", "-", "*", "/"];
const operator = {};
const operCount = input[2].split(" ").map((v) => +v);

for (let i = 0; i < operators.length; i++) {
  operator[operators[i]] = operCount[i];
}

function solution(arr, obj) {
  console.log(arr);
  console.log(obj);
  let min = 0;
  let max = 0;

  const dfs = () => {};

  dfs();
}

solution(numArr, operator);
