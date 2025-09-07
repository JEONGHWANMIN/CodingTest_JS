const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace("\r", ""))

const str1 = input[0]
const str2 = input[1]

function solution(str1, str2) {
    const str1Map = new Map();
    const str2Map = new Map();

    for (const str of str1) {
        str1Map.set(str, (str1Map.get(str) || 0) + 1);
    }

    for (const str of str2) {
        if (str1Map.has(str) && str1Map.get(str) > 0) {
            str1Map.set(str, str1Map.get(str) - 1);
        } else {
            str2Map.set(str, (str2Map.get(str) || 0) + 1);
        }
    }

    const str1Sum = [...str1Map.values()].reduce((a, b) => a + b, 0)
    const str2Sum = [...str2Map.values()].reduce((a, b) => a + b, 0)

    return str1Sum + str2Sum;
}

console.log(solution(str1, str2));
