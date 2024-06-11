// https://www.acmicpc.net/problem/1697
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)


/**
 * 사용 알고리즘: bfs
 * 키워드: 가장 빠른 시간
 * n: 수빈 위치
 * k: 동생 위치
 */
function solution(n, k) {
    if (n === k) return 0
    let count = 0;
    const visited = Array.from({length: 1000001}, () => false)
    const que = [n]
    visited[n] = true

    while (que.length) {
        const len = que.length
        for (let j = 0; j < len; j++) {
            const n = que.shift()

            for (const new_x of [n + 1, n - 1 ,n * 2] ) {
                if (new_x < 0 || new_x > 1000000 || visited[new_x]) continue
                if (new_x === k) {
                    return count + 1
                }
                visited[new_x] = true;
                que.push(new_x)
            }

        }

        count++
    }

    return count
}

console.log(solution(N, K))