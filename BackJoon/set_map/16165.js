const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.replace("\r", ""));


console.log(input);

const [n, m] = input.shift().split(" ").map(Number);

function solution() {

}


console.log(solution());