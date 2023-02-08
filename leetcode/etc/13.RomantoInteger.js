/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && s[i + 1] === "V") ||
      (s[i] === "I" && s[i + 1] === "X")
    ) {
      result += map[s[i] + s[i + 1]];
      i = i + 1;
    } else if (
      (s[i] === "X" && s[i + 1] === "L") ||
      (s[i] === "X" && s[i + 1] === "C")
    ) {
      result += map[s[i] + s[i + 1]];
      i = i + 1;
    } else if (
      (s[i] === "C" && s[i + 1] === "D") ||
      (s[i] === "C" && s[i + 1] === "M")
    ) {
      result += map[s[i] + s[i + 1]];
      i = i + 1;
    } else {
      result += map[s[i]];
    }
  }

  return result;
};
