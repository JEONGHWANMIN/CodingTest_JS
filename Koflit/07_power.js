function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let memo = base;
  for (let i = 1; i < exponent; i++) {
    memo = (memo * base) % 94906249;
    if (memo <= 0) return memo;
  }
  return memo;
}

console.log(2 ** 4);
console.log(power(2, 10));

// 2
// 4
// 8
// 16
