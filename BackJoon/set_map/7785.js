const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const n = Number(input.shift());
const arr = input

function solution(n, arr = []) {
  const map = new Map();

  for (const info of arr) {
    const [name, access] = info.split(" ");

    if (access === 'enter') map.set(name, access);
    if (access === 'leave') map.delete(name);
  }


  return [...map.keys()].sort().reverse().join("\n")
}

console.log(solution(n, arr));
