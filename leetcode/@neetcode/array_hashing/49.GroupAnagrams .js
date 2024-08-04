/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for (let i = 0 ; i < strs.length; i++){
        const str = strs[i].split('').sort().join('')

        if (map.has(str)){
            map.get(str).push(strs[i])
        } else {
            map.set(str, [strs[i]])
        }
    }


    return [...map.values()]
};



const strs1 = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs1))

const strs2 = [""]
console.log(groupAnagrams(strs2))

const strs3 = ["a"]
console.log(groupAnagrams(strs3))

const strs4 = ["","",""]
console.log(groupAnagrams(strs4))