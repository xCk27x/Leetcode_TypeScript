function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];

  const result: number[][] = [];
  const set = new Set<number>();

  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (!set.has(nums[0])) {
      // backtrace
      result.push(
        ...permuteUnique(nums.slice(1))
        .map((sub) => [nums[0], ...sub])
      );
    }
    set.add(nums[0]);
    nums.push(nums.shift()!);
  }

  return result;
}
