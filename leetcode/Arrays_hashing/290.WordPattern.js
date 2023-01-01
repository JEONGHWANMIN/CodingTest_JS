/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  const obj = {};

  if (sArr.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const word = pattern[i];
    if (!(word in obj)) {
      for (let key in obj) {
        if (obj[key] === sArr[i]) return false;
      }
      obj[word] = sArr[i];
    } else {
      if (obj[word] !== sArr[i]) return false;
    }
  }

  return true;
};
