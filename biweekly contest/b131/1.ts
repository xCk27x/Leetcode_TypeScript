function duplicateNumbersXOR(nums: number[]): number {
  const set = new Set();
  let re = 0;
  
  for (const num of nums) {
    if (set.has(num)) {
      re ^= num;
    }
    set.add(num);
  }

  return re;
};

console.log(duplicateNumbersXOR( [1,2,2,1])); // 4