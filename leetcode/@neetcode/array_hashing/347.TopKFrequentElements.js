/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    const result = [...map]

    const sorted = result.sort((a,b) => b[1] - a[1])

    return sorted.slice(0, k).map(a => a[0]);
};



console.log(topKFrequent([1,1,1,2,2,3],2))
console.log(topKFrequent([1],1))
