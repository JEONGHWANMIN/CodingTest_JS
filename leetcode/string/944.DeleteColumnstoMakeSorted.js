/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let previous = 0;
    for (let j = 0; j < strs.length; j++) {
      const uni = strs[j][i].charCodeAt();
      if (uni < previous) {
        count++;
        break;
      }
      previous = uni;
    }
  }
  return count;
};
