function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];
  const pivot = 0;
  for (let i = 1, j = nums.length - 1; i < j; ) {
    while (nums[pivot] < nums[j] && i <= j) {
      j--;
    }
    while (nums[pivot] >= nums[i] && i <= j) {
      i++;
    }
    console.log(nums)
    console.log('i =', i, ', j =', j, ', k = ', k);
    if (i > j) {
      [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
      if (nums.length - j === k) {
        return nums[j];
      } else if (nums.length - j < k) {
        // console.log('send right');
        return findKthLargest(nums.slice(0, j), k - (nums.length - j));
      } else {
        // console.log('send left');
        return findKthLargest(nums.slice(j + 1), k);
      }
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
};

console.log(findKthLargest([1, 1, 1, 1, 1, 1, 1, 1], 6));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4, 7, 0], 6));