function valueAfterKSeconds(n: number, k: number): number {
  const dp: number[] = new Array(n).fill(1);
  
  for (let i = 0; i < k; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = (dp[j] + dp[j-1]) % 1000000007;
    }
  }

  return dp[n-1];
};

console.log(valueAfterKSeconds(5, 3)); // 1