/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sObj = {};
  for (let str of s) {
    sObj[str] = (sObj[str] || 0) + 1;
  }

  let tObj = {};
  for (let str of t) {
    tObj[str] = (tObj[str] || 0) + 1;
  }

  for (let [key, _] of Object.entries(sObj)) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }
  return true;
};
