function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];
  
  const re: number[][] = [];
  const len = nums.length;
  
  for (let i = 0 ; i < len; i++) {
    re.push(
      ...permute(nums.slice(1))
      .map(sub => [nums[0], ...sub])
    );
      
    nums.push(nums.shift()!);
  }

  return re;
};