// 문제 : https://www.acmicpc.net/problem/12865
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N,MAX_WEIGHT] = input[0].split(" ").map(Number)
const inputs = input.slice(1).map(row => row.split(" ").map(Number))

/**
 * 알고리즘 유형 : dp
 * 출력: 배낭에 넣을 수 있는 물건들의 가치합의 최댓값
 * input : [ [ 6, 13 ], [ 4, 8 ], [ 3, 6 ], [ 5, 12 ] ]
 * max weight : 7
 * #  A  B  C  D
 * 0  0  0  0  0
 * 1  0  0  0  0
 * 2  0  0  0  0
 * 3  0  0  6  6
 * 4  0  8  8  8
 * 5  0  0  0  12
 * 6  13 13 13 13
 * 7  0  0  14 14
 */
function solution(inputs, N, MAX_WEIGHT) {
    const table = Array.from({length: MAX_WEIGHT + 1}, () => 0)
    for (let i = 0 ; i < N; i++) {
        const [w, v] = inputs[i]
        for (let j = MAX_WEIGHT ; j >= 0; j--) {
            if (j + w <= MAX_WEIGHT) {
                table[j + w] = Math.max(table[j + w], table[j] + v)
            }
        }
    }
    return Math.max(...table)
}

console.log(solution(inputs, N, MAX_WEIGHT));