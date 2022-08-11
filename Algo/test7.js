function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [];

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        result.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  // console.log(result);
  return findDecimal(result);
  // result 안에서 소수의 개수 구하기
}

function findDecimal(arr) {
  let count = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDecimal = true;
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        isDecimal = false;
        break;
      }
    }
    if (isDecimal) {
      count++;
      result.push(arr[i]);
    }
  }
  return count;
}

let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1

output = boringBlackjack([2, 3, 4, 8, 13]);
console.log(output); // 3
