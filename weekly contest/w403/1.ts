function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let minAve = Infinity;
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    minAve = Math.min(minAve, (nums[i] + nums[j]) / 2);
  }
  
  return minAve;
};