/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = [];

    // DFS를 이용하여 올바른 괄호 조합을 찾기
    const dfs = (subset = "", openCount = 0, closeCount = 0) => {
        // 닫는 괄호가 여는 괄호보다 많거나, 개수가 n을 초과하면 잘못된 상태
        if (openCount > n || closeCount > n) return;
        if (openCount < closeCount) return;

        // 유효한 조합을 찾은 경우
        if (openCount === n && closeCount === n) {
            results.push(subset);
            return;
        }

        // 여는 괄호를 추가할 수 있는 경우
        if (openCount < n) {
            dfs(subset + "(", openCount + 1, closeCount);
        }

        // 닫는 괄호를 추가할 수 있는 경우
        if (closeCount < openCount) {
            dfs(subset + ")", openCount, closeCount + 1);
        }
    };

    dfs(); // 초기 상태로 DFS 시작

    return results;
};

// 테스트 예제
console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
