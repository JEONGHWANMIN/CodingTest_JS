/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let check = [];
  for (let el of nums) {
    if (!check.includes(el)) {
      check.push(el);
    } else {
      return true;
    }
  }
  return false;
};
