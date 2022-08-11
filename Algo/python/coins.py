def change(amount , coins):
  INF = amount + 1
  dp = [INF] * INF
  dp[0] = 0
  # W = 1 ~ 10까지
  for W in range(1,amount+1):
   for i in range(len(coins)):
      if coins[i] <= W:
        dp[W] = min(dp[W] , dp[W - coins[i]] + 1)
  print(dp)
  return dp[amount] if dp[amount] < INF else -1
print(change(10, [1,4,5]))