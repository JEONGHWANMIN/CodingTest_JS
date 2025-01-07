/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = new Set();
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const targetWord = words[j];
      if (targetWord.includes(curWord)) {
        result.add(curWord);
        break;
      }
    }
  }

  return [...result];
};
