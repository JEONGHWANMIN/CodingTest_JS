/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let result = 0;
    skill.sort((a,b) => a - b)

    let leftIdx = 0;
    let rightIdx = skill.length - 1;

    let chemistry = null;
    while (leftIdx <= rightIdx) {
        if (!chemistry) {
            chemistry = skill[leftIdx] + skill[rightIdx]

        } else {
            if (skill[leftIdx] + skill[rightIdx] !== chemistry) return -1
        }

        result = result + (skill[leftIdx] * skill[rightIdx])
        leftIdx++
        rightIdx--
    }

    return result
};

