function wiggleMaxLength(nums: number[]): number {
  let sum = 1; // most left node

  for (let i = 0; i < nums.length; ) {
    if (nums[i] < nums[i + 1]) {
      while (nums[i] <= nums[i + 1]) i++;
      sum += 1;
    } else if (nums[i] > nums[i + 1]) {
      while (nums[i] >= nums[i + 1]) i++;
      sum += 1;
    } else {  
      i++;
    }
  }

  return sum;
};