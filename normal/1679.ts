function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0, j = nums.length - 1; i < j;) {
    switch (Math.sign(nums[i] + nums[j] - k)) {
      case -1:
        i++;
        break;
      case 1:
        j--;
        break;
      case 0:
        i++;
        j--;
        count++;
        break;
    }
  }
  return count;
};