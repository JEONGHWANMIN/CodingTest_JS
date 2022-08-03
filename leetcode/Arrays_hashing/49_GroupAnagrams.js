/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    result.push(sorted);
  }

  const map = {};
  for (let i = 0; i < result.length; i++) {
    if (result[i] in map) {
    } else {
      map[result[i]] = [];
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] in map) {
      map[result[i]].push(strs[i]);
    }
  }

  let answer = [];
  for (let [key, value] of Object.entries(map)) {
    value.sort();
    answer.push(value);
  }
  answer.sort((a, b) => a.length - b.length);

  return answer;
};

strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
