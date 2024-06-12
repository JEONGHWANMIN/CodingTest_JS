const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(" ").map(Number)
const arr = input[0].split(" ").map(Number)

function solution(n,m,arr) {
    arr.sort((a, b) => b - a);

    return arr[m -1]
}


console.log(solution(N,M,arr));