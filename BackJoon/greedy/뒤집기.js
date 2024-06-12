const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const coins = input[0].split("").map(Number)
/**
 * 0. 뒤집기가 가능한 지 찾는다.
 * 1. [0, 1] 중에 적은걸 찾는다.
 * 2. 연속된 수중에서 가장 많은 반복 구간을 찾는다.
 * 3. 가장 반복이 많은 구간을 뒤집는다.
 */
function solution(coins) {
    if (isNotReverse(coins)) return 0

    let result = 0;


    while (!isNotReverse(coins)) {
        let zero_count = 0
        let one_count = 0
        for (let i = 0 ; i < coins.length; i++) {
            if (coins[i] === 0) zero_count++
            if (coins[i] === 1) one_count++

        }

        console.log("zero_count", zero_count)
        console.log("one_count", one_count)

        let count_arr = []
        let start_idx = 0;
        let continue_count = 1;
        for (let i = 0 ; i < coins.length; i++) {
            if (i !== coins.length - 1 && coins[i] === coins[i+1]) {
                continue_count++
            } else {
                count_arr.push([coins[i], start_idx, i, continue_count])
                start_idx = i + 1
                continue_count = 1
            }
        }

        console.log("count_arr",count_arr)

        count_arr.sort((a, b) => a[3] - b[3])
        if (count_arr.length >= 2 && count_arr[count_arr.length - 1][3] === count_arr[count_arr.length - 2][3]) {
            const filteredArr = count_arr.filter((arr) => arr[3] === count_arr[count_arr.length - 1][3] )

            console.log(filteredArr)

            let same_zero_count = 0;
            let same_one_count = 0;

            for (let i = 0 ; i < filteredArr.length; i++) {
                if (filteredArr[i][0] === 0) same_zero_count++
                if (filteredArr[i][0] === 1) same_one_count++
            }


            const target = same_one_count > same_zero_count ? 0 : 1
            count_arr = count_arr.filter((arr) => arr[0] === target)
        }
        // const target_coin =
        //     zero_count > one_count
        //     ? 1
        //     : zero_count < one_count
        //         ? 0 : count_arr[count_arr.length - 1][0]



        // const target_coins = count_arr.filter((arr) => arr[0] === target_coin)

        const [target, str_idx, end_idx] = count_arr[count_arr.length - 1]

        for (let i = str_idx ; i <= end_idx ; i++) {
            coins[i] = target === 1 ? 0 : 1
        }




        result++

    }

    return result
}

function isNotReverse(arr) {
    const char = arr[0]
    return arr.every((ar) => ar === char)
}

// console.log(isReverse([0,0,0,0]))

console.log(solution(coins));

