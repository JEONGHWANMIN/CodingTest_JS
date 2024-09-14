/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowLen = matrix.length
    let colLen = matrix[0].length
    let leftIdx = 0;
    let rightIdx = rowLen * colLen - 1

    while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2)

        const rowIdx = Math.floor(midIdx / colLen)
        const colIdx = midIdx % colLen

        if (matrix[rowIdx][colIdx] === target) {
            return true
        } else if (matrix[rowIdx][colIdx] < target) {
            leftIdx = midIdx + 1
        } else {
            rightIdx = midIdx - 1
        }
    }

    return false
};

console.log(searchMatrix([
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]],
    3)
)

