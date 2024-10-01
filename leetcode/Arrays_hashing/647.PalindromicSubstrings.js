// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function(s) {
//     let count = 0;
//
//     let plusIndex = 0;
//     while (plusIndex !== s.length) {
//         for (let i = 0 ; i < s.length - plusIndex; i++) {
//             const word = s.slice(i, i+1+plusIndex)
//             if (isValidWord(word)) count++
//         }
//
//         plusIndex = plusIndex + 1
//     }
//
//     return count
// };
//
// function isValidWord(strs) {
//     if (strs.length === 0) return true
//
//     let left = 0;
//     let right = strs.length -1;
//
//     while (left <= right) {
//         if (strs[left] !== strs[right]) return false
//
//         left++
//         right--
//     }
//
//     return true
// }

var countSubstrings = function(s) {
    let count = 0;

    // 문자열의 각 문자와 문자 사이를 중심으로 회문을 확장
    for (let i = 0; i < s.length; i++) {
        count += expandAroundCenter(s, i, i);     // 홀수 길이 회문
        count += expandAroundCenter(s, i, i + 1); // 짝수 길이 회문
    }

    return count;
};

function expandAroundCenter(s, left, right) {
    let count = 0;

    // 왼쪽과 오른쪽이 문자열 범위 내에 있고, 같은 문자인 동안 확장
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }

    return count;
}


console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))