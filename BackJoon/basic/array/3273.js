// Input Data
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const nums = input[1].split(" ").map(Number);
const target = Number(input[2])

function solution(n, nums, target) {
    let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             result++
    //         }
    //     }
    // }
    // return result;

    const numSet = new Set([...nums]);
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const n = target - nums[i]
        set.add(n)
    }

    const setArr = [...set.values()]
    for (let i = 0; i < set.size; i++) {
        if (numSet.has(setArr[i])) {
            result++
        }
    }

    return result / 2;
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
