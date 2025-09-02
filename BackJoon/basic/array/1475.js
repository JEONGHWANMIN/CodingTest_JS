const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/jeonghwanmin/coding/CodingTest_JS/BackJoon/Input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((line) => line.replace("\r", ""))

function solution(str) {
    let requireSet = 0;

    const setArr = [0,0,0,0,0,0,0,0,0,0]

    const addSet = () => {
        setArr[0]++
        setArr[1]++
        setArr[2]++
        setArr[3]++
        setArr[4]++
        setArr[5]++
        setArr[6]++
        setArr[7]++
        setArr[8]++
        setArr[9]++
    }

    for (let i = 0; i < str.length; i++) {
        const numCard = Number(str[i])

        if (numCard === 6 || numCard === 9) {
          if (setArr[6] < 1 && setArr[9] < 1) {
              requireSet++
              addSet()
              setArr[numCard]--
          } else {
              if (setArr[6] > 0) {
                  setArr[6]--
              } else {
                  setArr[9]--
              }
          }
        } else {
            if (setArr[numCard] < 1) {
                requireSet++;
                addSet()
                setArr[numCard]--
            } else {
                setArr[numCard]--
            }

        }

    }

    return requireSet;
}

console.log(solution(input[0]));
