function ocean(amount, coins) {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    // 1. i = 1  1~10
    // 2. i = 2  2~10
    // 3. i = 5  5~10
    for (let i = coin; i <= amount; i++) {
      //총 경우의 수 = 현재 코인으로 만드는 경우의 수 + 그 전 경우의 수
      dp[i] = dp[i] + dp[i - coin];
    }
    console.log(`${coin}DP`, dp);
  }
  return dp[amount];
}

let output = ocean(10, [1, 2, 5]);

console.log(output); // 4
