/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 앞뒤 공백 제거
  // 중간에 공백이 2개 이상 지속될 경우 제거
  // 공백 한개를 기준으로 단어를 잘라서 뒤집는다.

  const sArr = s.trim().split("");

  for (let i = 0; i < sArr.length; i++) {
    // 공백이 연속 2개 라면 하나 제거
    if (sArr[i] === " " && sArr[i + 1] === " ") {
      sArr[i] = "";
    }
  }

  return sArr.join("").split(" ").reverse().join(" ");
};
