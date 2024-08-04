// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for (let i = 0 ; i < nums.length; i += 1) {
//         const num1 = nums[i];
//         for (let j = i + 1; j < nums.length; j += 1) {
//             const num2 = nums[j];
//             if (num1 + num2 === target) return [i,j]
//         }
//     }
//
//     return []
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const diff = target - num

        if (map.has(diff)) return [map.get(diff),i]
        map.set(num, i)
    }

    return []
};



console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));