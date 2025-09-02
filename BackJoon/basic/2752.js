const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].split(' ').map(line => Number(line));

function solution(nums) {
    return nums.sort((a, b) => a - b).join(' ');
}

console.log(solution(arr));
