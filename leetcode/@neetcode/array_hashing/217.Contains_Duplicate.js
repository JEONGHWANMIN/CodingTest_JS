/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const listLength = nums.length;
    const setLength = [...new Set(nums)].length

    return listLength !== setLength;
};


// Example1
console.log(containsDuplicate([1,2,3,1]));

// Example2
console.log(containsDuplicate([1,2,3,4]));

// Example3
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


/**
 * 풀이방법1: brute force : O(n2)
 * 풀이방법2: hashSet : (On)
 * 풀이방법3: Sorting and Sequential Search O(n log n)
 */

/** brute force : O(n2)
 * var containsDuplicate = function(nums) {
 *     for (let i = 0; i < nums.length; i++) {
 *         for (let j = i + 1; j < nums.length; j++) {
 *             if (nums[i] === nums[j]) {
 *                 return true;
 *             }
 *         }
 *     }
 *     return false;
 * };
 */

// HashSet 방법 (O(n)):
//
// var containsDuplicate = function(nums) {
//     const set = new Set();
//     for (const num of nums) {
//         if (set.has(num)) {
//             return true;
//         }
//         set.add(num);
//     }
//     return false;
// };

// Sorting and Sequential Search
// var containsDuplicate = function(nums) {
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// };