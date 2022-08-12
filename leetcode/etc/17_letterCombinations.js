/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let numStr = [
    "",
    "",
    "abc",
    "edf",
    "ghi",
    "jkl",
    "mnp",
    "pqrs",
    "tuv",
    "wxzy",
  ];
  let digitArr = digits.split("");
  if (digitArr.length === 0) return [];
  if (digitArr.length === 1) return numStr[digitArr[0]].split("");

  let result = [];
  function dfs(i, subset) {
    if (subset.length - 1 === digitArr.length) {
      return result.push(subset);
    }

    for (let i = 0; i < digitArr.length; i++) {
      dfs(i + 1, [...subset, numStr[digitArr[i]]]);
    }
  }

  dfs(0, []);
  console.log(result);
};
let out = letterCombinations("23");
console.log(out);
