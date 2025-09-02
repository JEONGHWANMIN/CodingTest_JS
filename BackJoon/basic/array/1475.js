const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace("\r", ""))

// function solution(str) {
//     let requireSet = 0;
//
//     const setArr = [0,0,0,0,0,0,0,0,0,0]
//
//     const addSet = () => {
//         setArr[0]++
//         setArr[1]++
//         setArr[2]++
//         setArr[3]++
//         setArr[4]++
//         setArr[5]++
//         setArr[6]++
//         setArr[7]++
//         setArr[8]++
//         setArr[9]++
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         const numCard = Number(str[i])
//
//         if (numCard === 6 || numCard === 9) {
//           if (setArr[6] < 1 && setArr[9] < 1) {
//               requireSet++
//               addSet()
//               setArr[numCard]--
//           } else {
//               if (setArr[6] > 0) {
//                   setArr[6]--
//               } else {
//                   setArr[9]--
//               }
//           }
//         } else {
//             if (setArr[numCard] < 1) {
//                 requireSet++;
//                 addSet()
//                 setArr[numCard]--
//             } else {
//                 setArr[numCard]--
//             }
//
//         }
//
//     }
//
//     return requireSet;
// }


/**
 * 주어진 숫자를 만들기 위해 필요한 최소 카드 세트 개수를 계산
 * 각 세트에는 0~9 숫자가 하나씩 들어있고, 6과 9는 서로 바꿔 사용 가능
 * @param {string} numberString - 만들어야 할 숫자 문자열
 * @returns {number} 필요한 최소 세트 개수
 */
function calculateMinimumCardSets(numberString) {
    // 각 숫자의 필요한 개수를 저장
    const digitCount = new Array(10).fill(0);

    // 입력 문자열의 각 숫자별 개수 계산
    for (const digit of numberString) {
        digitCount[parseInt(digit)]++;
    }

    // 6과 9는 서로 바꿔 사용할 수 있으므로 합쳐서 처리
    const sixNineCount = digitCount[6] + digitCount[9];
    const sixNineSets = Math.ceil(sixNineCount / 2);

    // 6과 9를 제외한 나머지 숫자들 중 최대값 구하기
    let maxOtherDigits = 0;
    for (let i = 0; i < 10; i++) {
        if (i !== 6 && i !== 9) {
            maxOtherDigits = Math.max(maxOtherDigits, digitCount[i]);
        }
    }

    // 6,9 처리에 필요한 세트와 다른 숫자들에 필요한 세트 중 최대값이 답
    return Math.max(sixNineSets, maxOtherDigits);
}

// 메인 실행
console.log(calculateMinimumCardSets(input[0]));
