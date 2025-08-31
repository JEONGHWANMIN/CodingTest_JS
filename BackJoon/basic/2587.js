const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace('\r', ''));

const nums = input.map(Number);

function solution(nums) {
    const sum = nums.reduce((sum, num) => sum + num, 0)
    const avg = sum / nums.length;

    const sortedNums = nums.sort((a, b) => a - b);

    return `${avg}\n${sortedNums[2]}`
}

console.log(solution(nums));