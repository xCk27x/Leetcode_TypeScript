function minOperations(nums: number[]): number {
  let count = 0;
  let flag = false;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      flag = true;
    } else {
      if (flag) {
        count++;
        flag = false;
      }
    }
  }
  if (flag) count++;
  count *= 2;
  if (nums[nums.length - 1] === 0) count--;

  return count;
};

console.log(minOperations([0,1,1,0,1])); // 1
console.log(minOperations([1,0,0,0])); // 1