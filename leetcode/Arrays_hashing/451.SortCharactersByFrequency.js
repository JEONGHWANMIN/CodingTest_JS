/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let res = "";
  // 1. 문자를 단어 순으로 정렬한다. (배열로 치환후 )
  // 2. 정렬된 문자를 빈도순으로 정렬한다.
  // 3. 정렬된 문자를 리턴한다.
  const stArr = s.split("");
  stArr.sort();

  const strMap = {};
  for (let str of stArr) {
    strMap[str] = (strMap[str] | 0) + 1;
  }

  const temp = [];
  for (let [key, value] of Object.entries(strMap)) {
    temp.push([key, value]);
  }

  temp.sort((a, b) => b[1] - a[1]);

  for (let ar of temp) {
    res += ar[0].repeat(ar[1]);
  }

  return res;
};
