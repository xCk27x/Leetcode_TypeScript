function findMaxForm(strs: string[], m: number, n: number): number {
  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let zeros = 0;
    let ones = 0;
    for (let c of str) {
      if (c === '0') zeros++;
      else ones++;
    }

    // 01 package problem with 2 dimensions
    for (let j = m; j >= zeros; j--) {
      for (let k = n; k >= ones; k--) {
       dp[j][k] = Math.max(dp[j][k], (dp[j - zeros][k - ones] + 1) ?? 0);
      }
    }
  }

  return dp[m][n];
};