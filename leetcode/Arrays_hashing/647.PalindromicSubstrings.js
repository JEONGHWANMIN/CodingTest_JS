/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    let plusIndex = 0;
    while (plusIndex !== s.length) {
        for (let i = 0 ; i < s.length - plusIndex; i++) {
            const word = s.slice(i, i+1+plusIndex)
            if (isValidWord(word)) count++
        }

        plusIndex = plusIndex + 1
    }

    return count
};

function isValidWord(strs) {
    if (strs.length === 0) return true

    let left = 0;
    let right = strs.length -1;

    while (left <= right) {
        if (strs[left] !== strs[right]) return false

        left++
        right--
    }

    return true
}

console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))