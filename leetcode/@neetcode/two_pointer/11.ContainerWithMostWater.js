/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxSection = -Infinity;

    let left = 0;
    let right = height.length - 1;

    while (left <= right) {
        const minHeight = Math.min(height[left], height[right]);
        const distance = right - left;
        const section = minHeight * distance;

        maxSection = Math.max(section, maxSection)

        if (height[left] < height[right]) left++
        else right--
    }

    return maxSection
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
