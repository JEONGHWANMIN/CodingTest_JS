// 문제: https://www.acmicpc.net/problem/1012

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const removedR = input.map(row => row.replace('\r',""));
const inputs = removedR.map((r) => r.split(" ").map(Number));

const d_row = [0,0,1,-1];
const d_col = [-1,1,0,0];
const T = inputs.shift()[0];

function solution(t, inputs) {
    let startIdx = 0;
    let result = '';
    for (let i = 0 ; i < t ; i++) {
        const [col, row, n] = inputs[startIdx];
        const location = inputs.slice(startIdx + 1, startIdx + n + 1);
        startIdx += n + 1;

        const {visitedMap, baechuMap} = getCheckMap(row, col, location);
        const res = seekBaechu(baechuMap, visitedMap);

        result = result + res + '\n';
    }

    return result.trim();
}

console.log(solution(T, inputs));

function getCheckMap(row, col, location) {
    const visitedMap = Array.from({length: row}, () => Array.from({ length: col }, () => false)); // row와 col의 위치를 바꿉니다.
    const baechuMap = Array.from({length: row}, () => Array.from({ length: col }, () => 0)); // row와 col의 위치를 바꿉니다.

    for (const [x, y] of location) baechuMap[y][x] = 1;

    return {visitedMap, baechuMap};
}

function seekBaechu(baechuMap, visitedMap) {
    let count = 0;
    for (let row = 0 ; row < baechuMap.length ; row++) {
        for (let col = 0; col < baechuMap[row].length ; col++) {
            if (visitedMap[row][col]) continue;
            if (baechuMap[row][col] === 1) {
                baechuBfs(row, col, baechuMap, visitedMap);
                count++;
            }
        }
    }

    return count;
}

function baechuBfs(row, col, baechuMap, visitedMap) {
    const que = [[row, col]];
    visitedMap[row][col] = true;

    while (que.length) {
        const [currentRow, currentCol] = que.shift();

        for (let i = 0 ; i < 4 ; i++) {
            const new_row = d_row[i] + currentRow;
            const new_col = d_col[i] + currentCol;

            if (new_row < 0 ||
                new_row >= baechuMap.length ||
                new_col < 0 ||
                new_col >= baechuMap[0].length ||
                visitedMap[new_row][new_col]
            ) continue;
            if (baechuMap[new_row][new_col] !== 1) continue;

            visitedMap[new_row][new_col] = true;
            que.push([new_row, new_col]);
        }
    }
}
