function findSubsequences(nums: number[]): number[][] {

  function backtrace(nums: number[]): number[][] {
    if (nums.length === 1) return [[], nums];

    const set = new Set<number>();
    const result: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) continue;
      set.add(nums[i]);

      backtrace(nums.slice(i + 1)).forEach((arr) => {
        if (nums[i] > arr[0]) return;

        result.push([nums[i], ...arr]);
      });
    }

    return result;
  }

  return backtrace(nums).filter((arr) => arr.length > 1);
}
