function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0;
  
  let left = Math.floor((nums.length-1)/2);
  let right = left + 1;

  if (nums[left] > nums[right])
    return findPeakElement(nums.slice(0, left+1));
  else
    return right + findPeakElement(nums.slice(right));
};