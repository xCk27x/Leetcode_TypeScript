function canPartition(nums: number[]): boolean {
  let volume = nums.reduce((acc, cur) => acc + cur, 0);
  if (volume % 2 !== 0) return false;
  volume /= 2;

  const dp = new Array(volume + 1).fill(0);
  for (let n of nums) {
    for (let i = volume; i >= n; i--) {
      dp[i] = Math.max(dp[i], dp[i - n] + n);
    }
    if (dp[volume] === volume) return true;
  }

  return false;
};