/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;

  let strIndex = 0;
  for (let i = 0 ; i < t.length; i++) {
    if (t[i] === s[strIndex]) {
      strIndex = strIndex + 1;
    }
  }

  return strIndex === s.length
};
