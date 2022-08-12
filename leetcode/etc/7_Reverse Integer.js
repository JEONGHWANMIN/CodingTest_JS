/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let maxInteger = Math.pow(2, 31) - 1;
  let minInteger = Math.pow(-2, 31);
  let isMinuse = false;
  x = String(x).split("").reverse();
  if (x.at(-1) === "-") isMinuse = true;

  if (isMinuse) {
    x = x.slice(0, x.length - 1);
    if (minInteger > Number(x.join("")) * -1) return 0;
    return Number(x.join("")) * -1;
  }
  let result = Number(x.join(""));
  if (maxInteger < result) return 0;
  return result;
};
