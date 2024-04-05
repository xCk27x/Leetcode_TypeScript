function nextPermutation(nums: number[]): void {
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i-1] < nums[i]) {
      for (let j = nums.length - 1; j >= i; j--) {
        if (nums[j] > nums[i-1]) {
          [nums[j], nums[i-1]] = [nums[i-1], nums[j]];
          let temp = nums.slice(i).sort((a, b) => a - b);
          for (let k = i; k < nums.length; k++) {
            nums[k] = temp[k-i];
          }
          console.log(nums);
          return;
        }
      }
    }
  }
  nums.sort((a, b) => a - b);
  console.log(nums);
  return;
};


nextPermutation([1,3,2]);
nextPermutation([3,2,1]);
nextPermutation([4,2,3,1]);
nextPermutation([3,4,2,1]);
nextPermutation([1,1,5]);