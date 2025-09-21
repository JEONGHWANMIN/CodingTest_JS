const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.replace("\r", ""));

const [n, m] = input[0].split(" ").map(Number);

function solution(n, m, arr) {
    const result = [];
    const siteMap = new Map();

    // 인덱스를 사용해서 순차적으로 접근
    for (let i = 1; i <= n; i++) {
        const [site, password] = arr[i].split(" ");
        siteMap.set(site, password);
    }

    for (let i = n + 1; i <= n + m; i++) {
        const site = arr[i];
        result.push(siteMap.get(site));
    }

    return result.join("\n");
}

console.log(solution(n, m, input));