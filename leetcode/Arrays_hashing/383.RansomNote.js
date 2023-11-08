/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomMap = {}

    for (let str of ransomNote) {
        ransomMap[str] = (ransomMap[str] || 0) + 1;
    }

    for (let str of magazine) {
       if (ransomMap[str] >= 2) {
           ransomMap[str] -= 1;
       } else {
           delete ransomMap[str]
       }

       if (Object.keys(ransomMap).length === 0) return true
    }

    return false
};
