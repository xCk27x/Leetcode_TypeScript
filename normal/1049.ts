function lastStoneWeightII(stones: number[]): number {
  stones.sort((a, b) => a - b);
  
  const volume = stones.reduce((a, b) => a + b, 0);
  const dp = new Array(Math.ceil(volume / 2) + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = dp.length - 1; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return Math.abs(volume - 2 * dp[dp.length - 1]);
};