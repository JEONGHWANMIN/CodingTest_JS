const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace("\r", ""))

const arr = input.map((line) => line.split(" ").map(Number))

function solution(arr) {
    const result = []
    const mapping = {
        0: 'D',
        1: 'C',
        2: 'B',
        3: 'A',
        4: 'E',
    }

    const resArr = arr.map((line) => line.reduce((a, b) => a + b));

    for (const res of resArr) {
        result.push(mapping[res]);
    }

    return result.join('\n');
}

console.log(solution(arr));


/**
 *  도(배 한 개, 등 세 개), 개(배 두 개, 등 두 개), 걸(배 세 개, 등 한 개), 윷(배 네 개), 모(등 네 개)
 *  도: 1 1 1 0 -> 3
 *  개 0 0 1 1 -> 2
 *  걸 0 0 0 1 -> 1
 *  윷 0 0 0 0 -> 0
 *  모 1 1 1 1 -> 4
 */