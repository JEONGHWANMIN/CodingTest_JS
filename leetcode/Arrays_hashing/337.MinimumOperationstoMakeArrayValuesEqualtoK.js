/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    if (nums.every(num => num === k)) return 0;

    if (nums.some(num => num < k)) return -1;

    const uniqueValuesGreaterThanK = [...new Set(nums.filter(num => num > k))].sort((a, b) => b - a);

    if (uniqueValuesGreaterThanK.length === 0) return -1;

    let operations = 0;
    let prevValue = Infinity;
    for (let i = 0; i < uniqueValuesGreaterThanK.length; i++) {
        const currentValue = uniqueValuesGreaterThanK[i];
        // If this is the first iteration or all previous values were the same
        if (i === 0 || prevValue === uniqueValuesGreaterThanK[i-1]) {
            operations++;
            prevValue = currentValue;
        } else {
            // If we find different values at the same level, it's impossible
            return -1;
        }
    }

    return operations;
}
