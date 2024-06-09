// 문제: https://www.acmicpc.net/problem/4179

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const INPUTS = input.map((row) => row.replace("\r",""))
const [R, C] = INPUTS[0].split(" ").map(Number)
const MIRO = INPUTS.slice(1)
const d_col = [0, 0, -1, 1]
const d_row = [-1, 1, 0, 0]
/**
 * 알고리즘 유형: BFS (키워드: 최단거리)
 * 출력: 지훈이가 탈출할 수 있는 가장 빠른 탈출 시간 or IMPOSSIBLE
 * 1. 불의 위치 및 지훈이의 위치를 구한다.
 * 2.
 */
function solution(miro, r, c) {
    const {visitedMap, fireMap} = getVisitedMap(miro, r, c)
    const {jihunQueue, firesQueue} = getLocationQueue(miro, r, c)

    const [row, col] = jihunQueue[0]

    if (row === 0 || col === 0 || row === r - 1 || col === c - 1) return 1

    fireBfs(fireMap, firesQueue, r, c, miro)

    const ends = jihunBfs(visitedMap, jihunQueue, r, c , miro, fireMap)

    return ends.length === 0 ? 'IMPOSSIBLE' : Math.min(...ends) + 1
}

console.log(solution(MIRO, R, C))

function getVisitedMap(miro, r, c) {
    const visitedMap = Array.from(
        {length: r},
        () => Array.from({length: c}, () => false))
    const fireMap = Array.from(
        {length: r},
        () => Array.from({length: c}, () => Infinity))

    return {visitedMap, fireMap}
}


function getLocationQueue(miro, r, c) {
    const firesQueue = []
    const jihunQueue = []

    for (let row = 0 ; row < r ; row++) {
        for (let col = 0 ; col < c ; col++) {
            if (miro[row][col] === 'J') jihunQueue.push([row, col, 0])
            if (miro[row][col] === 'F') firesQueue.push([row, col, 0])
        }
    }

    return { jihunQueue, firesQueue}
}

function fireBfs(fireMap, fireQueue, r, c, miro) {
    for (const que of fireQueue) {
        const [row, col, count] = que
        fireMap[row][col] = count
    }

    while (fireQueue.length) {
        const [row, col, cnt] = fireQueue.shift()

        for (let i = 0 ; i < 4 ; i++) {
            const new_row = row + d_row[i]
            const new_col = col + d_col[i]

            if (isNotMoveMiro(new_row, new_col, r, c)) continue
            if (miro[new_row][new_col] === '#' || fireMap[new_row][new_col] <= cnt + 1) continue

            fireMap[new_row][new_col] = cnt + 1
            fireQueue.push([new_row, new_col, cnt + 1])
        }
    }
}

function jihunBfs(visitedMap, jihunQueue, r, c, miro, fireMap) {
    const ends = []
    while (jihunQueue.length) {
        const [row, col, cnt] = jihunQueue.shift()

        for (let i = 0 ; i < 4 ; i++) {
            const new_row = row + d_row[i]
            const new_col = col + d_col[i]
            const next_cnt = cnt + 1

            if (isNotMoveMiro(new_row, new_col, r, c)) continue
            if (miro[new_row][new_col] === '#' || visitedMap[new_row][new_col] !== false || next_cnt >= fireMap[new_row][new_col]) continue

            if (new_row === r - 1 || new_col === c - 1 || new_row === 0 || new_col === 0) {
                ends.push(next_cnt)
            }
            visitedMap[new_row][new_col] = next_cnt
            jihunQueue.push([new_row, new_col, next_cnt])
        }
    }

    return ends
}

function isNotMoveMiro(new_row, new_col, r, c) {
    return new_row < 0 || new_col < 0 || new_row >= r || new_col >= c
}