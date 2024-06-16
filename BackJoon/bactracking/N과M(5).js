// 문제: https://www.acmicpc.net/problem/15654
// 알고리즘: 백트랙킹
// 키워드: 모두 구해라
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const [N,M] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
numbers.sort((a, b) => a - b);


// 특정 인덱스를 방문했을경우, 방문 안했을 경우 뒤로 다시 상태를 돌려놓는 백트랙킹 체킹 상태 필요
function solution(n, m, numbers) {
    const result = []
    const visited = Array.from({length: n}, () => false)

    const dfs = (index, subset = []) => {
        if (index === n + 1) return
        if (subset.length === m) {
            result.push(subset.join(" "))
            return
        }

        for (let i = 0 ; i < n ; i++) {
            if (visited[i]) continue

            visited[i] = true
            dfs(index + 1, [...subset, numbers[i]])
            visited[i] = false
        }
    }

    dfs(0,[])

    return result.join("\n")
}

console.log(solution(N,M,numbers))
