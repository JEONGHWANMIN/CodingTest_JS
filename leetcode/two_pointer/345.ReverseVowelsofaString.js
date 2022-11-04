/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  };
  const sArr = s.split("");
  let l = 0;
  let r = sArr.length - 1;
  while (l < r) {
    if (sArr[l] in vowels && sArr[r] in vowels) {
      [sArr[l], sArr[r]] = [sArr[r], sArr[l]];
      l++;
      r--;
    } else if (sArr[l] in vowels) r--;
    else l++;
  }
  return sArr.join("");
};
