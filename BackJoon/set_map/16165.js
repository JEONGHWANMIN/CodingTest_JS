const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.replace("\r", ""));



const [n, m] = input.shift().split(" ").map(Number);

function solution(n, m, arr = []) {
    const result = [];

    const idols = {}
    const idolGroup = {}

    let i = 0;
    let groupIdx = 0;
    while (i < n) {
        let startGroupIdx = groupIdx;
        const group = arr[groupIdx];
        const people = Number(arr[groupIdx + 1]);
        groupIdx = groupIdx + people + 2
        idols[group] = []

        for (let j = startGroupIdx + 2; j < groupIdx; j++) {
            idolGroup[arr[j]] = group
            idols[group].push(arr[j])
        }
        i++
    }

    for (let i = groupIdx; i < arr.length - 1; i++) {
        const idol = arr[i]
        const num = Number(arr[++i])

        if (num === 0) {
            result.push(...idols[idol].sort());
        } else {
            const groupName = idolGroup[idol]
            result.push(groupName)
        }
    }


    return result.join("\n")
}


console.log(solution(n, m , input));