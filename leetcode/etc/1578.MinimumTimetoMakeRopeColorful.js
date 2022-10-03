/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let res = 0;
  for (let i = 1; i < colors.length; i++) {
    let c1 = colors[i],
      c2 = colors[i - 1];
    if (c1 === c2) {
      console.log(i, i - 1);
      res += Math.min(neededTime[i], neededTime[i - 1]);
      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
  }

  return res;
};
