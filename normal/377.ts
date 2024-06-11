function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  
  // 從容量1開始，計算每個容量的排列數
  for (let i = 1; i <= target; i++) {
    // 容量是i時，將nums中的每個數字都試一遍
    for (let num of nums) {
      // 如果當前的背包裝得下num
      if (i >= num) {
        // 那麼就將剩餘容量的排列數加到當前容量的排列數中
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};