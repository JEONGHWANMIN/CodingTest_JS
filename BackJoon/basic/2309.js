const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace('\r', ''));

const nums = input.map(Number)

function solution(nums) {
    nums.sort((a, b) => a - b);

    const sum = nums.reduce((a, b) => a + b, 0);

    const remover = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const calculated = sum - nums[i] - nums[j]
            if (calculated === 100) {
                remover.push(i);
                remover.push(j);
                break
            }
        }
    }

    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (i === remover[0] || i === remover[1]) continue
        result.push(nums[i])
    }

    return result.join('\n')
}

console.log(solution(nums));

/**
 * 무조건 합이 100이 되어야 함
 */

// 0,1, 0,2, 0,3,0,4, 0,5,0,6,0,7, 0,8