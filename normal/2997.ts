function minOperations(nums: number[], k: number): number {
  let count = 0;
  
  let xor = nums.reduce((p, c) => p ^ c);
  xor ^= k;
  
  for (let i of xor.toString(2)) {
    if (i === '1') count++;
  }

  return count;
};