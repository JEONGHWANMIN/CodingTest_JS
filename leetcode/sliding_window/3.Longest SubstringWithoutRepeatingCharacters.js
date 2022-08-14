/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {};
  // pwwkew
  let max = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let char = s[r];

    map[char] = (map[char] || 0) + 1;

    // 주요 로직 !!
    while (map[char] > 1) {
      let leftChar = s[l];

      // left right 둘다 똑같다면
      if (map[leftChar] > 1) {
        map[leftChar]--;
      } else {
        delete map[leftChar];
      }
      l++;
    }

    max = Math.max(max, Object.keys(map).length);
  }

  return max;
};

// lengthOfLongestSubstring("abcabcbb");
console.log(lengthOfLongestSubstring("pwwkew"));
/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
