/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = {};

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  const sortedArr = Object.values(countMap).sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) return false;
  }

  return true;
};
