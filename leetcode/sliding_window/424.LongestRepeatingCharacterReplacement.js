/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0;
  let map = {};
  let sum, max;
  for (let r = 0; r < s.length; r++) {
    let charr = s[r];
    map[charr] = (map[charr] || 0) + 1;

    [sum, max] = mapSum(map);
    while (sum - max > k) {
      map[s[l]]--;
      l++;
      map[s[l]]++;
      [sum, max] = mapSum(map);
    }
  }

  return sum;
};

function mapSum(obj) {
  let sum = 0;
  let max = 0;
  for (let [key, value] of Object.entries(obj)) {
    sum += value;
    max = Math.max(max, value);
  }
  return [sum, max];
}
characterReplacement("AABABBA");
console.log(
  'characterReplacement("AABABBA"): ',
  characterReplacement("AABABBA")
);
