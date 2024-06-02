function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum < Math.abs(target)) return 0;

  // addSum + subSum = sum, addSum - subSum = target
  // 2 * addSum = sum + target, addSum = (sum + target) / 2
  const volume = (sum + target) / 2;
  if (!Number.isInteger(volume)) return 0;
  
  const dp = new Array(volume + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = volume; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[volume];
};