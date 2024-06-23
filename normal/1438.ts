function longestSubarray(nums: number[], limit: number): number {
  let maxLen = 0;
  let max = 0;
  let min = Infinity;
  const tempArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    tempArray.push(nums[i]);
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
    if (tempArray.length > maxLen) {
      if (max - min > limit) {
        const leftNum = tempArray.shift();
        if (leftNum === max) {
          max = Math.max(...tempArray);
        } else if (leftNum === min) {
          min = Math.min(...tempArray);
        }
      }
      maxLen = Math.max(maxLen, tempArray.length);
    }
  }

  return maxLen;
}
