function minCostToEqualizeArray(nums: number[], cost1: number, cost2: number): number {
  nums.sort((a, b) => b - a);
  const modulo = 1000000007;

  if (cost1 * 2 <= cost2) {
    let max = nums[0];
    let sum = ((max * nums.length) - nums.reduce((p, c) => p + c, 0)) * cost1;
    return sum % modulo;
  }

  let max = nums[0];
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    let diff = max - nums[i];
    console.log(diff);
    for (let j = 0; j < diff; j++) {
      nums[i] += 1;
      nums[nums.length - 1] += 1;
      sum += cost2;
      let last = nums.length - 1;
      while (nums[last] > nums[last - 1]) {
        [nums[last], nums[last - 1]] = [nums[last - 1], nums[last]];
        last--;
      }
    }
  }

  sum += (max - Math.min(...nums)) * cost1;

  return sum % modulo;
};

console.log(minCostToEqualizeArray( [4,1], 5, 2)); // 6
console.log(minCostToEqualizeArray([2,3,3,3,5], 2, 1)); // 6
console.log(minCostToEqualizeArray( [3,5,3], 1, 3)); // 6