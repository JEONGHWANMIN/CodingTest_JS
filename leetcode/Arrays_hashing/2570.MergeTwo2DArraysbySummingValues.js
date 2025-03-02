/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    // 둘 중 하나가 배열 맨 끝에 남을 때 까지 로직 수행
    const map = new Map();

    for (let i = 0; i < nums1.length; i++) {
        const [key, val] = nums1[i];
        if (!map.has(key)) {
            map.set(key, val)
        } else {
            map.set(key, map.get(key) + val);
        }
    }

    for (let j = 0; j < nums2.length; j++) {
        const [key, val] = nums2[j];
        if (!map.has(key)) {
            map.set(key, val)
        } else {
            map.set(key, map.get(key) + val);
        }
    }

    return [...map.entries()].toSorted((a,b) => a[0] - b[0])
};

const nums1 = [[1,2],[2,3],[4,5]]
const nums2 = [[1,4],[3,2],[4,1]]

console.log(mergeArrays(nums1, nums2))
