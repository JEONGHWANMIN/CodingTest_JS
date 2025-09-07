// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const nums = input[1].split(" ").map(Number);
const target = Number(input[2])

function solution(n, nums, target) {
    let result = 0;

    nums.reverse();


    const map = new Map();
    for (let num of nums) {
        const requiredNum = target - num
        if (map.has(requiredNum)) result++
        map.set(num, requiredNum);
    }

    return result
}

console.log(solution(n, nums, target));


/**
 * 9
 * 5 12 7 10 9 1 2 3 11
 * 13
 *
 * 8 1 6 3 4 12 11 10 2
 *
 *
 */


/**
 * 9
 * 5 12 7 10 9 1 2 3 11
 * 13
 *
 * (12,1)
 * (10,3)
 * (2,11)
 */
