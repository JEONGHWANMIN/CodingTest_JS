const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

function solution(n, arr) {
    let sumM = 0;
    let sumY = 0;

    arr.forEach((num) => {
        const payYFee = calculateYFee(num);
        const payMFee = calculateMFee(num);
        sumY += payYFee;
        sumM += payMFee;
    });

    if (sumY === sumM) return `Y M ${sumM}`;
    return sumY < sumM ? `Y ${sumY}` : `M ${sumM}`;
}

// Y요금제 -> 30초 단위로 10원씩 부과
// M요금제 -> 60초 단위로 15원씩 부과

function calculateYFee(ms) {
    const fee = 10;
    const payFee = (Math.floor(ms / 30) + 1) * fee;
    return payFee;
}

function calculateMFee(ms) {
    const fee = 15;
    const payFee = (Math.floor(ms / 60) + 1) * fee;
    return payFee;
}

console.log(solution(n, arr));
