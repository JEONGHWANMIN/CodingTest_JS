/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const visited = {}
    const nums = Array.from({length: pattern.length + 1}, (_, index) => index + 1)



    for (let i = 0; i < pattern.length; i++) {
        // 'I' | 'D' case에 가능한 숫자 다 넘기기
        // 작은 숫자를 찾아야 하니까 작은 숫자부터 넘기기

        if (pattern[i] === 'I') {

        }

        if (pattern[i] === 'D') {

        }
    }

    console.log(nums)
};


const pattern = "IIIDIDDD"

console.log(smallestNumber(pattern))