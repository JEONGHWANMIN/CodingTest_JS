/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const checkMap = {}
    for (let num of nums) {
        checkMap[num] = (checkMap[num] || 0) + 1
    }

    let maxKey = 0;
    let maxValue = 0;

    for (let key in checkMap) {
        const isBig = checkMap[key] > maxValue
        maxValue = isBig ? checkMap[key] : maxValue;
        maxKey = isBig ? Number(key) : maxKey
    }


    return maxKey
};
