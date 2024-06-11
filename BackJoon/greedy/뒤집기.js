const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


/**
 * 0. 뒤집기가 가능한 지 찾는다.
 * 1. [0, 1] 중에 적은걸 찾는다.
 * 2. 연속된 수를 다 뒤집는다.
 */
function solution() {

}

function isReverse(arr) {
    const char = arr[0]
    return arr.every((ar) => ar === char)
}

console.log(isReverse([0,0,0,0]))

console.log(solution());