const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
    const result = []

    for (let i = 0; i < n; i++) {
        const left = i
        const starCount = (n * 2) - 1 - left - left

        const leftBlank = " ".repeat(left)
        const star = "*".repeat(starCount)

        result.push(leftBlank + star)
    }

    for (let i = n - 2; i >= 0; i--) {
        const left = i
        const starCount = (n * 2) - 1 - left - left

        const leftBlank = " ".repeat(left)
        const star = "*".repeat(starCount)

        result.push(leftBlank + star)
    }

    return result.join('\n');
}

console.log(solution(Number(input[0])))


// console.log("1")


/**
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */
