/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const open = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in open) {
      stack.push(s[i]);
    } else {
      const poped = stack.pop();
      if (open[poped] !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

let s = "((";
isValid(s);
console.log("isValid(s): ", isValid(s));
