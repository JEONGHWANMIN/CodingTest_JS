const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.replace("\r", ""));

const n = input.shift();

function solution(n, arr = []) {
    let totalViewBuildingCount = 0;
    const rightBuildingHeights = [];

    for (let i = n - 1; i >= 0; i--) {
        const curBuildingHeight = arr[i];
        let tempIndex = rightBuildingHeights.length - 1;
        let viewBuildingCount = 0;

        while (
            tempIndex >= 0 &&
            rightBuildingHeights.length &&
            rightBuildingHeights[tempIndex] < curBuildingHeight
            ) {
            tempIndex--;
            viewBuildingCount++;
        }

        while (
            rightBuildingHeights.length &&
            rightBuildingHeights[tempIndex] < curBuildingHeight
            ) {}

        rightBuildingHeights.push(curBuildingHeight);
        totalViewBuildingCount = totalViewBuildingCount + viewBuildingCount;
    }

    return totalViewBuildingCount;
}

console.log(solution(n, input.map(Number)));

/**
 * 10  3  7  4  12 2     -> 빌딩의 높이
 * [1][2][3][4][5][6]    -> 빌딩의 번호
 *
 * 조건1 : 현재 내 빌딩의 높이보다 낮은 오른쪽 빌딩들만 볼 수 있다.
 * 조건2 : stack에서 나보다 큰 수가 있을 때 까지 while을 통해서 count up
 *
 *
 *
 */
