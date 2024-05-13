function canJump(nums: number[]): boolean {
  console.log(nums);

  if (nums[0] >= nums.length - 1) return true;
  
  let max = 0;
  let next = 0;

  for (let i = 1; i <= nums[0]; i++) {
    if (nums[i] !== 0 && i + nums[i] > max) {
      max = i + nums[i];
      next = i;
    }
  }

  return next === 0 ? false : canJump(nums.slice(next));
};

function canJump(nums: number[]): boolean {
  let last = nums.length - 1;

  for (let i = last - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }

  return last === 0;
}

console.log(canJump([1,2,3])); // true