// 문제: https://www.acmicpc.net/problem/10026

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputs = input.map((raw) => raw.replace("\r",""))
const N = Number(inputs.shift())


// 현재 위치에서 상하좌우 찾기
const direct_row = [0,0,1,-1]
const direct_col = [1,-1,0,0]

/**
 * 출력: 일반이 프레임, 적록색약 프레임
 * 1. 방문 체크 리스트, 그림
 */
function solution(n, drawing) {
    const drawArr = drawing.map((draw) => draw.split(""))

    const {humanVisitedMap, undeadVisitedMap} = getVisitedMap(n, drawArr)

    const humanCount =  seekDrawing("human", humanVisitedMap, n, drawArr)
    const undeadCount = seekDrawing("undead", undeadVisitedMap, n, drawArr)

    return `${humanCount} ${undeadCount}`
}

console.log(solution(N, inputs))

function getVisitedMap(n) {
    const humanVisitedMap = createCheckMap(n)
    const undeadVisitedMap = createCheckMap(n)

    return {humanVisitedMap, undeadVisitedMap}
}

function createCheckMap(n)  {
    return Array.from({length: n}, () => Array.from({length: n}, () => false))
}

function seekDrawing(type, visitedMap, n, drawing) {
    let count = 0;
    for (let row = 0 ; row < n ; row++) {
        for (let col = 0 ; col < n ; col++) {
            if (visitedMap[row][col]) continue
            if (type === 'undead') drawUndeadBfs(row, col, drawing, n, visitedMap)
            else drawBfs(row, col, drawing, n, visitedMap)
            count++
        }
    }
    return count
}

function drawBfs(row, col, drawing, n, visitedMap) {
    const char = drawing[row][col]
    const que = [[row,col]]

    while (que.length) {
        const [row, col] = que.shift()

        for (let i = 0 ; i < 4 ; i++) {
            const new_row = direct_row[i] + row
            const new_col = direct_col[i] + col

            if (new_row < 0 ||
                new_col < 0 ||
                new_row >= n ||
                new_col >= n ||
                visitedMap[new_row][new_col] ||
                drawing[new_row][new_col] !== char
            ) continue

            visitedMap[new_row][new_col] = true
            que.push([new_row, new_col])
        }
    }

}

function drawUndeadBfs(row, col, drawing, n, visitedMap) {
    const mappingDrawByP = drawing.map((draw) => draw.map((char) => {
        if (char === 'R' || char === 'G') return 'P'
        return char
    }))

    const que = [[row,col]]
    const char = drawing[row][col] === 'R' || drawing[row][col] === 'G' ? 'P' : drawing[row][col]

    while (que.length) {
        const [row, col] = que.shift()

        for (let i = 0 ; i < 4 ; i++) {
            const new_row = direct_row[i] + row
            const new_col = direct_col[i] + col

            if (new_row < 0 ||
                new_col < 0 ||
                new_row >= n ||
                new_col >= n ||
                visitedMap[new_row][new_col] ||
                mappingDrawByP[new_row][new_col] !== char
            ) continue

            visitedMap[new_row][new_col] = true
            que.push([new_row, new_col])
        }
    }
}


