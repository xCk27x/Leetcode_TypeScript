function pivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce(
    (acc, cur) => acc + cur, 0
  ) - nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum) 
      return i;
    leftSum += nums[i];
    rightSum -= nums[i+1] || 0;
  }

  return -1;
};