function findMin(nums: number[]) {
  return nums.reduce((acc, cur) => cur < acc ? cur : acc, Infinity);
}

function addedInteger(nums1: number[], nums2: number[]): number {
  return findMin(nums2) - findMin(nums1);
};

console.log(addedInteger([2,6,4], [9,7,5])); // 2
console.log(addedInteger([10], [5])); // 2