const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace('\r', ''));

const n = Number(input.shift())
const arr = input[0].split(" ").map(Number)

function solution(n, arr) {
    const result = []

    const stack = [{num: 0, index: 0}]

    for (let i = 0; i < arr.length; i++) {
        const curNum = arr[i]

        while (stack.length && stack[stack.length - 1].num < curNum) {
            stack.pop()
        }

        if (stack.length && stack[stack.length -1].num > curNum) {
            result.push(stack[stack.length -1].index + 1) ;
        } else {
            result.push(0);
        }
        stack.push({num: curNum, index: i})
    }

    return result.join(" ")
}

console.log(solution(n, arr));
