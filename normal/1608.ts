function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const len = nums.length;

  if (len <= nums[0]) return len;

  for (let i = 1; i < len; i++) {
    let k = len - i;
    if (nums[i-1] < k && k <= nums[i]) 
      return k;
  }

  return -1;
};