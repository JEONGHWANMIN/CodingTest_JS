/**
 * @param {number} num
 * @return {string}
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

// 58
var intToRoman = function (num) {
  let ROMAN_VALUE = [1, , 4, 5, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  const ROMAN_MAP = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [10, "X"],
    [40, "LX"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);
  ROMAN_VALUE.sort((a, b) => b - a);
  let string = "";
  let i = 0;
  while (num !== 0) {
    for (let i = 0; i < ROMAN_VALUE.length; i++) {
      if (num >= ROMAN_VALUE[i]) {
        string = string + ROMAN_MAP.get(ROMAN_VALUE[i]);
        num = num - ROMAN_VALUE[i];
        break;
      }
    }
  }
  return string;
};

// intToRoman(3);
console.log("intToRoman(3);: ", intToRoman(1994));
/*
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
*/
