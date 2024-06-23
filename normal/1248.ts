function numberOfSubarrays(nums: number[], k: number): number {
  let niceCount = 0;
  let oddCount = 0;
  let oddIndex = [-1];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      oddCount++;
      oddIndex.push(i);
    }
    if (oddCount >= k) {
      niceCount += oddIndex[oddCount - k + 1] - oddIndex[oddCount - k];
    }
  }

  return niceCount;
};