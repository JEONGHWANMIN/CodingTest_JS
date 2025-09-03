// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const nums = input[1].split(" ").map(Number);
const target = Number(input[2])

function solution(n, nums, target) {
    let result = 0;

    for (let num of nums) {
        if (num === target) result++
    }

    return result
}

console.log(solution(n, nums, target));
