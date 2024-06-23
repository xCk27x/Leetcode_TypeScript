function minimumOperations(nums: number[]): number {
  return nums.reduce((acc, num) => {
    if (num % 3 === 0) return acc
    return acc + 1;
  }, 0);  
};

console.log(minimumOperations([1,2,3,4])); // 3