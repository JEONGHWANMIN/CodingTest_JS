/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]; // 3,1,2,4
    res += min;
    let j = i + 1;
    while (j < arr.length) {
      if (arr[j] < min) {
        min = arr[j];
      }
      res += min;
      j++;
    }
  }
  return res % (Math.pow(10, 9) + 7);
};
