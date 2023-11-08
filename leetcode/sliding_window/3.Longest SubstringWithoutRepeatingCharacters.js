/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  const map = {};

  let l = 0;
  for (let str of s) {
    map[str] = (map[str] || 0) + 1;

    while (map[str] >= 2) {
      let leftChar = s[l];

      if (map[leftChar] >= 2) {
        map[leftChar]--;
      } else {
        delete map[leftChar];
      }
      l++;
    }

    result = Math.max(result, Object.keys(map).length);
  }

  return result;
};
