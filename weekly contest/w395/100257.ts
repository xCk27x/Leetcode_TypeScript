function medianOfUniquenessArray(nums: number[]): number {
  let dp = new Set<number>();

  function helper(nums: number[], i: number, j: number): number[] {
    if (dp.has(i * 100000 + j))
      return [];
    if (i >= j) {
      dp.add(i * 100000 + j);
      return [1]
    }

    const set = new Set<number>(nums.slice(i, j+1));
    
    let re = [set.size]
    re.push(...helper(nums, i+1, j), ...helper(nums, i, j-1));
    dp.add(i * 100000 + j);

    return re;
  }

  let result = helper(nums, 0, nums.length - 1);
  result.sort((a, b) => a - b);
  console.log(result)
  return result[Math.floor((result.length-1) / 2)];
};

function medianOfUniquenessArray2(nums: number[]): number {
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));

  function countDistinct(nums: number[], start: number, end: number): number {
      const set = new Set<number>();
      for (let i = start; i <= end; i++) {
          set.add(nums[i]);
      }
      return set.size;
  }

  function helper(nums: number[], i: number, j: number): number {
      if (i >= j) {
          return 1;
      }
      if (dp[i][j] !== 0) {
          return dp[i][j];
      }

      const distinct = countDistinct(nums, i, j);
      dp[i][j] = distinct + helper(nums, i + 1, j) + helper(nums, i, j - 1) - helper(nums, i + 1, j - 1);

      return dp[i][j];
  }

  const distinctCount = helper(nums, 0, n - 1);
  return distinctCount;
};

console.log(medianOfUniquenessArray2([1,2,3])) // 6
console.log(medianOfUniquenessArray2([3,4,3,4,5])) // 6
console.log(medianOfUniquenessArray2([4,3,5,4])) // 6