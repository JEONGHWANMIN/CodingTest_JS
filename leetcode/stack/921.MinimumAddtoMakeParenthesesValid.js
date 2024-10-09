// 시간복잡도: O(n)
// 공간복잡도: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let openCount = 0;
  let closeCount = 0;

  for (let char of s) {
    if (char === "(") {
      openCount++;
    } else {
      if (openCount > 0) {
        openCount--;
      } else {
        closeCount++;
      }
    }
  }

  return openCount + closeCount;
};
