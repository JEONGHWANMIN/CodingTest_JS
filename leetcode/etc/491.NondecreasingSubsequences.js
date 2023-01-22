/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	console.log(nums);
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		let temp = [nums[i]];
		let isInValid = false;
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] < nums[i]) {
				isInValid = true;
				break;
			}
			temp.push(nums[j]);
			result.push(temp);
		}

		if (isInValid) continue;

		result.push(temp);
	}

	return result;
};
