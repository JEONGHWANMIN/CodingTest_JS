const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../..//Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace('\r',''));

const n = Number(input.shift())

function solution(n, strs) {
    const result = []

    for (let str of strs) {
        const [str1, str2] = str.split(' ')

        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');

        const insertStr = sortedStr1 === sortedStr2 ? 'Possible' : 'Impossible';

        result.push(insertStr)
    }
    return result.join('\n');
}

console.log(solution(n, input));
