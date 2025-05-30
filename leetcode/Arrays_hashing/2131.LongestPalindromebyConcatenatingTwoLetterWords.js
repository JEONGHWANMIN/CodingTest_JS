/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let count = 0;
    let maxMiddleWordCount = 0;

    const wordCheckMap = new Map();

    for (const word of words) {
        wordCheckMap.set(word, (wordCheckMap.get(word) || 0) + 1)
    }

    for (const word of words) {
        const rWord = word.split('').reverse().join('')
        if ((word === rWord && wordCheckMap.get(word) >= 2 )||
            word !== rWord && wordCheckMap.has(word) && wordCheckMap.has(rWord)) {
            count = count + (rWord.length * 2);

            if (word === rWord) {
                const wordUpdatedCount = wordCheckMap.get(word) - 2;
                if (wordUpdatedCount <= 0) {
                    wordCheckMap.delete(word);
                } else {
                    wordCheckMap.set(word, wordUpdatedCount)
                }
            } else {
                const wordUpdatedCount = wordCheckMap.get(word) - 1;
                const rWordUpdatedCount = wordCheckMap.get(rWord) - 1;

                if (wordUpdatedCount <= 0) {
                    wordCheckMap.delete(word);
                } else {
                    wordCheckMap.set(word, wordUpdatedCount)
                }

                if (rWordUpdatedCount <= 0) {
                    wordCheckMap.delete(rWord)
                } else {
                    wordCheckMap.set(rWord, rWordUpdatedCount)
                }
            }
        }
    }

    for (let word of wordCheckMap.keys()){
        if (isValidWord(word)) {
            maxMiddleWordCount = Math.max(maxMiddleWordCount, word.length)
        }
    }

    return count + maxMiddleWordCount;
};

function isValidWord(word) {
    let leftIndex = 0;
    let rightIndex = word.length - 1;

    while(leftIndex <= rightIndex) {
        if (leftIndex === rightIndex) return true
        if (word[leftIndex] !== word[rightIndex]) return false;

        leftIndex++;
        rightIndex--;
    }

    return true;
}

// 28
// INIT wordCheckMap: Map(4) { 'dd' => 3, 'aa' => 1, 'bb' => 1, 'cc' => 5 }
// console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]))
console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]))
// console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]))

// TODO: 팰린드롬 앞 뒤로 읽어도 똑같은 문자
// 문제: 가장 긴 팰린드롬을 만드세요

// 각 단어마다 반대로 되는 짝이 있는지 확인 -> lc -> cl
// 가운데 단어 -> (짝수) 같은 문자, (홀수) 좌우 같은문자 가운데 상관없음

// 페어를 어떻게 찾을건가?
// 배열 순회 cl : lc


/**
 1. 예시
 페어 - [lc,cl]
 가운데 - [gg]
 lc + gg + cl
 */

/**
 2. 예시
 페어 - [ty,yt], [lc,cl]
 가운데 - [ab]
 ty lc cl yt
 */

/**
 3. 예시
 페어 - []
 가운데 - [cc, ll, xx]
 */



// ["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]

// [dd, dd] [aa, aa] [bb, bb] [dd, dd] [aa] [cc, cc] [bb] [dd]

// ["ab","ty","yt","lc","cl","ab"]

// ["qo","fo","fq","qf","fo","ff","qq","qf","of","of","oo","of","of","qf","qf","of"]

// [fq,qf]
/**
 * qo: 1
 * fo: 2
 * ff: 1
 * qq: 1
 * qf: 1
 * of: 2
 * oo: 1
 *
 *
 *
 */
