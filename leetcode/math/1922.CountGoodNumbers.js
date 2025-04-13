/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007;

    // 1. 짝수 개수, 홀수 개수 찾는다.
    const evenPositions = Math.ceil(n / 2);
    const oddPositions = Math.floor(n / 2);

    // 2. 짝수는 0,2,4,6,8 -> 5개 가능
    // 3. 홀수 소수 -> 2, 3, 5, 7 -> 4개 가능
    return modPow(5, evenPositions, MOD) * modPow(4, oddPositions, MOD) % MOD;
};


/**
 * 모듈러 지수 계산을 위한 빠른 거듭제곱 함수
 * @param {number} base - 밑
 * @param {number} exponent - 지수
 * @param {number} mod - 모듈로 값
 * @return {number} - (base^exponent) % mod
 */
function modPow(base, exponent, mod) {
    // ex: 2^0 -> 1
    if (exponent === 0) return 1;

    // 지수를 반으로 나눠 계산
    const half = modPow(base, Math.floor(exponent / 2), mod);

    // 지수가 짝수인 경우
    if (exponent % 2 === 0) {
        return (half * half) % mod;
    }
    // 지수가 홀수인 경우
    else {
        return (((half * half) % mod) * base) % mod;
    }
}

/**
 * 홀수 지수와 짝수 지수를 다르게 처리하는 이유는 수학적인 특성 때문입니다.
 * 짝수 지수의 경우
 * 짝수 지수 n에서는 n을 정확히 반으로 나눌 수 있습니다:
 * base^n = base^(n/2) × base^(n/2) = (base^(n/2))^2
 * 예: 3^8 = (3^4)^2 = (81)^2 = 6,561
 * 홀수 지수의 경우
 * 홀수 지수 n에서는 n을 정확히 반으로 나눌 수 없습니다. n/2를 내림하면 (n-1)/2가 됩니다:
 * base^n = base × base^(n-1) = base × (base^((n-1)/2))^2
 * 예: 3^9 = 3 × 3^8 = 3 × (3^4)^2 = 3 × 81^2 = 3 × 6,561 = 19,683
 */

console.log(countGoodNumbers(2));


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countGoodNumbers = function(n) {
//     const MOD = BigInt(1000000007);
//
//     // 1. 짝수 개수, 홀수 개수 찾는다.
//     const nBig = BigInt(n);
//     const evenPositions = (nBig + BigInt(1)) / BigInt(2); // Math.ceil(n/2)의 BigInt 버전
//     const oddPositions = nBig / BigInt(2);                // Math.floor(n/2)의 BigInt 버전
//
//     // 2. 짝수는 0,2,4,6,8 -> 5개 가능
//     // 3. 홀수 소수 -> 2, 3, 5, 7 -> 4개 가능
//     const result = (modPow(BigInt(5), evenPositions, MOD) *
//         modPow(BigInt(4), oddPositions, MOD)) % MOD;
//
//     return Number(result);
// };
//
// /**
//  * 모듈러 지수 계산을 위한 빠른 거듭제곱 함수 (BigInt 버전)
//  * @param {BigInt} base - 밑
//  * @param {BigInt} exponent - 지수
//  * @param {BigInt} mod - 모듈로 값
//  * @return {BigInt} - (base^exponent) % mod
//  */
// function modPow(base, exponent, mod) {
//     // ex: 2^0 -> 1
//     if (exponent === BigInt(0)) return BigInt(1);
//
//     // 지수를 반으로 나눠 계산
//     const half = modPow(base, exponent / BigInt(2), mod);
//
//     // 지수가 짝수인 경우
//     if (exponent % BigInt(2) === BigInt(0)) {
//         return (half * half) % mod;
//     }
//     // 지수가 홀수인 경우
//     else {
//         return (((half * half) % mod) * base) % mod;
//     }
// }
