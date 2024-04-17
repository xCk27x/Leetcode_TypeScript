// function rob(nums: number[]): number {
//   const dp = Array(nums.length).fill(-1);

//   const robHelper = (arr: number[]): number => {
//     if (arr.length === 0) 
//       return 0;
//     if (arr.length === 1)
//       return arr[0];
//     if (dp[arr.length - 1] !== -1)
//       return dp[arr.length - 1];

//     dp[arr.length - 1] = Math.max(
//       robHelper(arr.slice(1)), arr[0] + robHelper(arr.slice(2)));

//     return dp[arr.length - 1];
//   }
  
//   return robHelper(nums);
// };

function rob(nums: number[]): number {
  if (nums.length <= 1) return nums[0] || 0;

  const dp = 
    [nums[0], Math.max(nums[0], nums[1])];
  
  let i = 2;
  while (i < nums.length) {
    dp.push(
      Math.max(dp[i-1], nums[i] + dp[i-2])
    );
    i++;
  }

  return dp[dp.length-1];
}