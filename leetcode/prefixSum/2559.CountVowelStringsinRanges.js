function vowelStrings(words, queries) {
  const checkMap = new Map([
    ["a", "a"],
    ["e", "e"],
    ["i", "i"],
    ["o", "o"],
    ["u", "u"],
  ]);

  const prefixSum = Array.from({ length: words.length + 1 }, () => 0);

  for (let i = 1; i < words.length + 1; i++) {
    const word = words[i - 1];
    const isVowel = checkMap.has(word[0]) && checkMap.has(word.at(-1));
    prefixSum[i] = isVowel ? prefixSum[i - 1] + 1 : prefixSum[i - 1];
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [startIdx, endIdx] = queries[i];
    const count = prefixSum[endIdx + 1] - prefixSum[startIdx];
    result[i] = count;
  }

  return result;
}
