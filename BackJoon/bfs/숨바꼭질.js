const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)


/**
 * n: 수빈 위치
 * k: 동생 위치
 */
function solution(n, k) {
    let count = 0;
    const visited = Array.from({length: 1000001}, () => 0)
    const que = [n]
    visited[n] = 1

    while (que.length) {
        const poped = que.shift()

    }

    que.push(n)
}

solution(N, K)

// 10 -> 20 연산 결과가 동생 위치랑 차이가 덜 나는 쪽으로 가야함
// 10 -> 9 (8차이)

// 해야 할 연산이 3개임
// -1 +1 , X2