/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const sArr= s.split("").sort()
    const tArr= t.split("").sort()

    for (let i = 0; i < t.length; i++) {
        if (sArr[i] !== tArr[i]) return false
    }

    return true
};



// true
console.log(isAnagram("anagram","nagaram"))

// false
console.log(isAnagram("rat","car"))
