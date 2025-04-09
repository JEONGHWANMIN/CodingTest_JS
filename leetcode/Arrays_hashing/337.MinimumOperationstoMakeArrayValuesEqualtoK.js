/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    if (nums.every(num => num === k)) return 0;
    if (nums.some(num => num < k)) return -1;

    const uniqueValuesGreaterThanK = [...new Set(nums.filter(num => num > k))].sort((a, b) => b - a);

    return uniqueValuesGreaterThanK.length
}
