/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (0 > x) return false;

  let reverse = String(x).split("").reverse().join("");

  return String(reverse) === String(x);
};
