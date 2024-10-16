/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const chars = [
        ['a', a],
        ['b', b],
        ['c', c]
    ]

    const ans = []
    const sum = a + b + c;

    while (ans.length < sum) {

        // 내림 차순 정렬 (최대 빈도수가 가장 앞으로 오도록)
        chars.sort((a,b) => b[1] - a[1])

        // 만들어진 문자열 2개가 연속되면서, 최대 빈도수 라면 그 다음 문자를, 그게 아니라면 최대 빈도수 문자를
        const char = (ans.at(-1) === ans.at(-2) && ans.at(-1) === chars[0][0])
            ? chars[1] : chars[0]

        // 빈도수 2번째 카운트가 0이라면, 즉 더 이상 추가할 수 있는 문자가 없다면 반복문 종료
        if (char[1] === 0) break

        ans.push(char[0])
        char[1]--;

    }

    return ans.join('')
};