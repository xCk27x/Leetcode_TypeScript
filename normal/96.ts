function numTrees(n: number): number {
  const dp = [1, 1];
  
  for (let i = 2; i <= n; i++) {
    let next = 0;
    for (let j = 1; j <= i; j++) {
      next += dp[j - 1] * dp[i - j];
    }
    dp.push(next);
  }

  return dp[n];
};