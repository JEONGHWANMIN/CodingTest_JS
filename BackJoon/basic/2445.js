const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {

    let result = ''

    for (let i = 1; i <= n; i++) {
        let left = '*'.repeat(i);
        let right = '*'.repeat(i);
        const blank = (n * 2) - left.length - right.length
        let temp = left + " ".repeat(blank) + right;
        result += temp + '\n';
    }

    for (let i = n - 1; i >=  0; i--) {
        let left = '*'.repeat(i);
        let right = '*'.repeat(i);
        const blank = (n * 2) - left.length - right.length
        let temp = left + " ".repeat(blank) + right;
        result += temp + '\n';
    }

    return result;
}

console.log(solution(Number(input[0])))


//1. 한 row 당 10개 좌, 우
//2. 한 row 가 꽉 차기 전까지는 2개씩 늘어난다.
//3.

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
