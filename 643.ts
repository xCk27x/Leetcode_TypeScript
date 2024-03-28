function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];

  let temp = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxAve = temp;
  
  for (let i = 1; i < nums.length - k + 1; i++) {
    temp += nums[i + k - 1] - nums[i-1];
    maxAve = Math.max(temp, maxAve);
  }  
  return maxAve / k;
};