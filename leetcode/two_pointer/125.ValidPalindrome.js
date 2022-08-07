/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = '';
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
      str = str + s[i];
    }
    if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
      str = str + s[i];
    }
  }

  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
