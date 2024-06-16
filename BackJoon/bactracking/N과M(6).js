// 문제: https://www.acmicpc.net/problem/15655
// 알고리즘: 백트랙킹
// 키워드: 모두 구해라
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N,M] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
numbers.sort((a, b) => a - b);

function solution(n, m, numbers) {
    const result = []

    const dfs = (index, subset = []) => {
        if (subset.length === m) {
            result.push(subset.join(" "))
            return
        }
        if (index === n) return


        for (let i = index ; i < n ; i++) {
            dfs(i+1, [...subset, numbers[i]])
        }
    }

    dfs(0)

    return result.join("\n")
}


console.log(solution(N,M,numbers))