/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort((a,b) => a - b);
    if (nums.length & 2 !== 0) return false;
    if (nums.length === 0) return false
    
    const stack = []

    for (let num of nums) {
        if (stack.length === 0) {
            stack.push(num)
        } else {
            const poped = stack.pop();
            if (num !== poped) return false;
        }
    }

    return true
};
