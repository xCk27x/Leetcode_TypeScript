function longestSubarray(nums: number[]): number {
  let left = 0, right = 0;
  let last0 = -1;
  let maxLen = 0;

  nums.push(0);
  nums.forEach((num, i) => {
    if (num === 0) {
      left = right;
      right = i - last0 - 1;
      console.log(left, right, last0, maxLen);
      last0 = i;
      maxLen = Math.max(maxLen, left + right);
    }
  });

  return Math.min(maxLen, nums.length - 2);
};

console.log(longestSubarray([1,1,0,0,1,1,1,0,1])); // 4