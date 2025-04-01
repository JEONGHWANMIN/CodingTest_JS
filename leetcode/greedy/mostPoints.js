/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let maxPoint = 0;
    const dfs = (index, lockCount, pointSum) => {
        if (index > questions.length - 1) {
            maxPoint = Math.max(maxPoint, pointSum);
            return;
        }
        if (lockCount > 0) {
            dfs(index + 1, lockCount - 1, pointSum);
        } else {
            const [point, brain] = questions[index];
            // 1. 풀었을 때
            dfs(index + 1, brain, pointSum + point);

            // 2. 안 풀었을 때
            dfs(index + 1, 0, pointSum);
        }
    };
    dfs(0, 0, 0);
    return maxPoint;
};