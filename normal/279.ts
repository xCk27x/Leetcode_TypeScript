function numSquares(n: number): number {
  const maxElement = Math.floor(Math.sqrt(n));
  
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= maxElement; i++) {
    for (let j = i**2; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - i**2] + 1);
    }
  }

  return dp[n];
};