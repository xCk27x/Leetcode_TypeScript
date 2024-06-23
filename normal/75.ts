/**
 Do not return anything, modify nums in-place instead.
*/
function sortColors(nums: number[], left: number = 0, right: number = nums.length - 1): void {
  
  if (left >= right) return;
  
  const pivot = nums[left];
  
  let i = left + 1;
  let j = right;
  
  while (i <= j) {
    if (nums[i] > pivot && nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    if (nums[i] <= pivot) i++;
    if (nums[j] >= pivot) j--;
  }

  [nums[left], nums[j]] = [nums[j], nums[left]];

  sortColors(nums, left, j - 1);
  sortColors(nums, j + 1, right);

  return;
};