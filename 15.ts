function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let re: number[][] = [];
  let i = 0;
  while (i < nums.length-2) {
    let left = i+1, right = nums.length-1;
    while (left < right) {
      if (nums[left] + nums[right] > -nums[i])
        do {
          right--;
        } while (nums[right] === nums[right+1] && left < right);
      else if (nums[left] + nums[right] < -nums[i])
        do {
          left++;
        } while (nums[left] === nums[left-1] && left < right);
      else {
        re.push([nums[i], nums[left], nums[right]]);
        do {
          right--;
        } while (nums[right] === nums[right+1] && left < right);        
        do {
          left++;
        } while (nums[left] === nums[left-1] && left < right);
      }
    }
    do {
      i++;
    } while (nums[i] === nums[i-1] && i < nums.length-2);
  }
  return re;
};

// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0,1,1]));
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));