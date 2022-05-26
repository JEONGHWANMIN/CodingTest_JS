function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // 비율 %
  let rate = interestRate / 100;
  let money = 1;
  let year = 0;
  console.log(rate);
  while (money < 2) {
    money = money * (1 + rate);
    year++;
  }
  return year;
}

// let output = computeWhenDouble(7);
// console.log(output); // --> 11

output = computeWhenDouble(200);
console.log(output); // --> 8
