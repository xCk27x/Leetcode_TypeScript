function jump(nums: number[]): number {
  let i = 0;
  let sum = 0;

  for (let i = 0; i < nums.length - 1; sum++) {
    let max = 0;
    let next = i + 1;
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j >= nums.length - 1) return sum + 1;
      if (max < nums[i + j] + j) {
        max = nums[i + j] + j;
        next = i + j;
      }
    }
    i = next;
  }

  return sum;
};