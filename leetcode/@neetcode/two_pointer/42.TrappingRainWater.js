// 시간복잡도: O(n)
// 공간복잡도: O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let count = 0;

    const leftHeight = Array.from({length: height.length}).fill(0)
    const rightHeight = Array.from({length: height.length}).fill(0)


    for (let i = 1 ; i < height.length; i++) {
        leftHeight[i] = Math.max(leftHeight[i-1], height[i-1])
    }

    for (let i = height.length - 2 ; i >= 0; i--) {
        rightHeight[i] = Math.max(rightHeight[i+1], height[i+1])
    }


    for (let i = 0 ; i < height.length; i++) {
        const minHeight = Math.min(leftHeight[i], rightHeight[i])

        if (minHeight - height[i] > 0) {
            count = count + minHeight - height[i]
        }

    }

    return count;
};

// 테스트
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  // 결과: 9
