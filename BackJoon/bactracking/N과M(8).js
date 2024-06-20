// 문제: https://www.acmicpc.net/problem/15656
// 알고리즘: 백트랙킹
// 키워드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N,M] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
numbers.sort((a, b) => a - b);


function solution(n, m, numbers) {
    const result = []
    const visited = Array.from({length: numbers.length}, () => false)

    const dfs = (index, subset = []) => {
        if (subset.length === m) {
            if (!result.includes(subset.join(" "))) result.push(subset.join(" "))
            return
        }
        if (index === n + 1) return


        for (let i = 0 ; i < n ; i++) {
            if (visited[i]) continue
            visited[i] = true
            dfs(i+1, [...subset, numbers[i]])
            visited[i] = false
        }
    }

    dfs(0)

    return result.join("\n")
}


console.log(solution(N,M,numbers))