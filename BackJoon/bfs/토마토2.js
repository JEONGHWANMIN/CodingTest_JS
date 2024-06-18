// 문제: https://www.acmicpc.net/problem/7569 토마토
// 알고리즘: bfs
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((raw) => raw.replace('\r',''));


console.log(input)

function solution() {
    return null
}

console.log(solution())