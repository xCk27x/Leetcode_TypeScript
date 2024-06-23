function maximumTotalCost(nums: number[]): number {
  let sum = nums[0];
  const dp = [sum, sum]; // [noflip, flip]

  for (let i = 1; i < nums.length; i++) {
    const noflip = nums[i] + Math.max(dp[0], dp[1]);
    const flip = -nums[i] + dp[0];
    [dp[0], dp[1]] = [noflip, flip];
  }

  return Math.max(dp[0], dp[1]);
};

// [1, 2, -3, 4]
console.log(maximumTotalCost([1, -2, 3, 4])); // 6
console.log(maximumTotalCost([1, -1, 1, -1])); // 6