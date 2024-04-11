function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) 
      return nums[i];
  }

  return -1;
};