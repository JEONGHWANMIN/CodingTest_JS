/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k ) return false

    const countMap = new Map();
    for (let i = 0; i < s.length; i++) {
        countMap.set(s[i], (countMap.get(s[i]) || 0) + 1)
    }

    let oddCount = 0;
    for (const count of countMap.values()) {
        if (count % 2 === 1) oddCount = oddCount + 1
    }

    return oddCount <= k
};

console.log(canConstruct("annabelle", 2))

