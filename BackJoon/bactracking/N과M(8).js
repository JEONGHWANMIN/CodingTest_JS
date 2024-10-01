// 문제: https://www.acmicpc.net/problem/15656
// 알고리즘: 백트랙킹
// 키워드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N,M] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
numbers.sort((a, b) => a - b);

<<<<<<< HEAD
function solution(n, m, numbers) {
    const result = []

    const dfs = (index, subset = []) => {
        if (subset.length === m) {
            result.push(subset.join(" "))
=======

function solution(n, m, numbers) {
    const result = []
    const visited = Array.from({length: numbers.length}, () => false)

    const dfs = (index, subset = []) => {
        if (subset.length === m) {
            if (!result.includes(subset.join(" "))) result.push(subset.join(" "))
>>>>>>> 8f9f2cb5a9097453f6244671ef9a32300cfcb221
            return
        }
        if (index === n + 1) return


<<<<<<< HEAD
        for (let i = index ; i < n ; i++) {
            dfs(i, [...subset, numbers[i]])
=======
        for (let i = 0 ; i < n ; i++) {
            if (visited[i]) continue
            visited[i] = true
            dfs(i+1, [...subset, numbers[i]])
            visited[i] = false
>>>>>>> 8f9f2cb5a9097453f6244671ef9a32300cfcb221
        }
    }

    dfs(0)

    return result.join("\n")
}


console.log(solution(N,M,numbers))