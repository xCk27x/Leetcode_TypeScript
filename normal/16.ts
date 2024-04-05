function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a,b) => a - b);
  let re = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; ) {
    for (let left = i + 1, right = nums.length - 1; left < right; ) {
      let sum = nums[left] + nums[right] + nums[i];
      if (sum === target) return sum;
      re = Math.abs(re - target) > Math.abs(sum - target) ? sum : re;
      if (sum > target) 
      do {
          right--;
        } while (nums[right] === nums[right + 1]);
      else
        do {
          left++;
        } while (nums[left - 1] === nums[left]);
    }
    do {
      i++;
    } while (nums[i - 1] === nums[i])
  }
  return re;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0,0,0], 1));

