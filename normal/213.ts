function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let result = 0;
  const dp: number[] = new Array(nums.length - 1);

  // 1. dp[0] ~ dp[n-2]
  [dp[0], dp[1]] = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length - 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  result = dp[dp.length - 1];

  // 2. dp[1] ~ dp[n-1]
  [dp[0], dp[1]] = [nums[1], Math.max(nums[1], nums[2])];
  for (let i = 3; i < nums.length; i++) {
    dp[i - 1] = Math.max(dp[i - 2], dp[i - 3] + nums[i]);
  }

  result = Math.max(result, dp[dp.length - 1]);

  return result;
}
