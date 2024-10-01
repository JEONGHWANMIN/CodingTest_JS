// 시간복잡도: O(n)
// 공간복잡도: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    const opener = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in opener) {
            stack.push(char);
        } else {
            const lastOpener = stack.pop();
            if (opener[lastOpener] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// 테스트
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([}}])"));  // false
