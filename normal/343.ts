function integerBreak(n: number): number {
  let dp = [0, 1, 1, 2, 4];

  function helper(k: number): number {
    if (dp[k] !== undefined) return dp[k];
    
    let max = 0;
    for (let i = 2; i <= k / 2; i++) {
      max = Math.max(max, i * helper(k - i), i * (k - i));
    }
    dp[k] = max;

    return max;
  }

  return helper(n);
};