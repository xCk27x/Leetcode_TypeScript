/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) return;

  for (let i = 0, j = 1; j < nums.length; j++) {
    if (!nums[i]) {
      if (nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    else
      i++;
  }
};

