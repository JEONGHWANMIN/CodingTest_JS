const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace('\r', ''));

const [num1, num2] = input[0].split(" ").map(n => parseInt(n)).sort((a, b) => a - b);

function solution(num1, num2) {
    const result = []

    for (let i = num1 + 1; i < num2; i++) {
        result.push(i);
    }

    return `${result.length}\n${result.join(' ')}`
}

console.log(solution(num1, num2));