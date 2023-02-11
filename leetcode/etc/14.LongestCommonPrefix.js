/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minLength = 200;
  for (let i = 0; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  let result = "";
  for (let i = 0; i < minLength; i++) {
    let isPrefixSame = true;
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        isPrefixSame = false;
        break;
      }
    }

    if (isPrefixSame) result = result + strs[0][i];
    else break;
  }

  return result;
};
