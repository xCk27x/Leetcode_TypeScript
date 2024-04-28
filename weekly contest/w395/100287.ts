function minimumAddedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  
  for (let i = 0; i < nums1.length - 2; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] - nums1[i] === nums
    }
  }
};