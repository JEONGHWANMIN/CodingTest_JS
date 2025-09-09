const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace('\r', ''));

const n = input.shift();

function solution(n, arr) {
    console.log(n, arr)
    const stack = []

    let pushNum = 1;
    console.log("arr:", arr)
    while (pushNum < n) {
        if (stack.length === 0) {
            stack.push(pushNum);
            continue;
        }


    }

}

console.log(solution(n, input.map(Number)))