/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;
  while (n !== 0) {
    if (n % 5 === 0) {
      n = n / 5;
      continue;
    } else if (n % 3 === 0) {
      n = n / 3;
      continue;
    } else if (n % 2 === 0) {
      n = n / 2;
      continue;
    }
    if (n === 1) return true;
    return false;
  }
};
