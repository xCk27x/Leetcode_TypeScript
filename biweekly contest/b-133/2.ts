function minOperations(nums: number[]): number {
  function flip3nums(index: number): void {
    for (let i = index; i < index + 3; i++) {
      nums[i] = nums[i] === 0 ? 1 : 0; 
    }
  }
  
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) {
      count++;
      flip3nums(i);
    }
  }

  if (nums.indexOf(0) === -1) return count;
  return -1;
};

console.log(minOperations([0,1,1,1,0,0])); // 0