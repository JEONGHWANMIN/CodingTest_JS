function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  let newStr = '2';
  // 2 ~ num 까지의 숫자 하나 하나 반복한다.
  for (let i = 3; i <= num; i++) {
    // 반복 되는 그  숫자가 소수 인지 판단하고 소수면 prime에 push한다.
    for (let j = 2; j <= i; j++) {
      if (j === i - 1) newStr = newStr + '-' + i;
      if (i % j === 0) {
        break;
      } else {
        continue;
      }
    }
  }
  return newStr;
}

console.log(listPrimes(18));
