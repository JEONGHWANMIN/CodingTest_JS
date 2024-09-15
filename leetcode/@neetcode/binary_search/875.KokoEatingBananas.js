/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxCount = Math.max(...piles);
    let k = maxCount

    let leftIdx = 0;
    let rightIdx = maxCount;
    while (leftIdx <= rightIdx) {
        const midIndex = Math.floor((leftIdx + rightIdx) / 2);
        const tempCount = midIndex+1
        let temphour = 0;

        for (let i = 0 ; i < piles.length; i++) {
            temphour = temphour + Math.ceil(piles[i] / tempCount)
        }

        if (temphour <= h) k = Math.min(k, tempCount);

        if (temphour <= h) {
            rightIdx = midIndex - 1;
        } else {
            leftIdx = midIndex + 1;
        }
    }



    return k
};

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))



// 5 -> [1,2,2,3] 8
// 4 -> [1,2,2,3] 8
// 3 -> [1,2,3,4] 10

// [1,2,3,4,5,6,7,8,9,10,11]