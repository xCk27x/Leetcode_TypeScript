function removeElement(nums: number[], val: number): number {
  
  let i = 0;
  
  for (const n of nums) {
    if (n !== val) {
      nums[i] = n;
      i++;
    }
  }

  return i;
};