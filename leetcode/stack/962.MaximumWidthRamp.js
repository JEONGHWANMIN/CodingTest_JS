/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const stack = [];
    let maxWidth = 0;


    // 감소되는 부분의 idx 기록 (가장 낮은 부분이 스택 위에 올라와 있는 상태)
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[i] < nums[stack.at(-1)]) {
            stack.push(i);
        }
    }

    console.log("stack", stack)

    // 맨 오른쪽 부터 순회
    for (let i = nums.length - 1; i >= 0; i--) {
        // 스택이 있는동안, 오른쪽 값과 스택에 top 값을 비교
        while (stack.length > 0 && nums[i] >= nums[stack.at(-1)]) {
            maxWidth = Math.max(maxWidth, i - stack.pop());
        }
    }

    return maxWidth;
};

// 4 2 3