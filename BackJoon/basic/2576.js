const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace('\r', ''));

const nums = input.map(Number);

function solution(nums) {
    const odds = []

    for (const num of nums) {
        if (num % 2 !== 0) odds.push(num);
    }

    if (odds.length === 0) return -1;

    const sum = odds.reduce((acc, cur) => acc + cur, 0);
    const min = Math.min(...odds)
    return `${sum}\n${min}`
}

console.log(solution(nums));