/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let oneCount = 0;
    let steps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            oneCount++;
        } else {
            steps = steps + oneCount;
        }
    }

    return steps
};