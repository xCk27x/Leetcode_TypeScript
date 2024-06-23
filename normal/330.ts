function minPatches(nums: number[], n: number): number {
  let sum = 0;
  let index = 0;
  let patches = 0;

  while (sum < n) {
    if (index < nums.length && nums[index] <= sum + 1) {
      sum += nums[index];
      index++;
    } else {
      sum += sum + 1;
      patches++;
    }
  }

  return patches;
};