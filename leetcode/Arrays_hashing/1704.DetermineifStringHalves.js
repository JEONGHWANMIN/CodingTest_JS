/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const dict = {
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
  let leftCount = 0;
  let rightCount = 0;

  const strArr = s.split("");

  const midIdx = Math.floor(strArr.length) / 2; // 4 -> 2  5 -> 2

  const leftArr = strArr.slice(0, midIdx);
  const rightArr = strArr.slice(midIdx);

  for (let str of leftArr) {
    if (str in dict) leftCount++;
  }

  for (let str of rightArr) {
    if (str in dict) rightCount++;
  }

  return leftCount === rightCount;
};
