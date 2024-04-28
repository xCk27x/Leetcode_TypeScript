function productExceptSelf(nums: number[]): number[] {
  let zeroAmount = 0;
  const productOfNums = nums.reduce((acc, cur) => {
    if (cur === 0) {
      zeroAmount++;
      return acc;
    }
    return acc * cur;
  }, 1);

  if (zeroAmount > 1) return Array(nums.length).fill(0);
  if (zeroAmount === 1)
    return nums.map((num) =>
      num === 0 ? productOfNums : 0
    );
  return nums.map((num) => productOfNums / num);
}

function productExceptSelf2(nums: number[]): number[] {
  const re = new Array(nums.length).fill(1);
  
  let left = 1, right = 1;
  for (let i = 0; i < nums.length; i++) {
    re[i] *= left;
    re[nums.length - 1 - i] *= right;
    left *= nums[i];
    right *= nums[nums.length - 1 - i];
  }
  
  return re;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
