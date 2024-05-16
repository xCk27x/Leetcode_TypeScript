function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let set = new Set<number>();

  k = Math.min(k, nums.length);
  for (let i = 0; i < k; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    set.delete(nums[i - k]);
  }

  return false;
};