function minSubArrayLen(target: number, nums: number[]): number {
  let result = Infinity;
  let temp = 0;

  for (let i = 0, j = 0; j < nums.length; j++) {
    temp += nums[j];
    if (temp >= target) {
      while (temp - nums[i] >= target) {
        temp -= nums[i++];
      }
      result = Math.min(result, j - i + 1);
    }
  }

  return result === Infinity ? 0 : result;
}
