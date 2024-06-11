function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (const val of coins) {
    for (let i = val; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - val] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

