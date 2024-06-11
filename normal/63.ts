function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  
  const dp: number[][] = Array.from({length: m}, () => new Array(n).fill(0));

  function helper(i: number, j: number): number {
    if ((i >= m || j >= n) || obstacleGrid[i][j] === 1) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    if (dp[i][j] !== 0) return dp[i][j];

    dp[i][j] = helper(i + 1, j) + helper(i, j + 1);
    return dp[i][j];
  }

  return helper(0, 0);
};

function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  
  const dp: number[] = new Array(n).fill(0);
  dp[n - 1] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) dp[j] = 0;
      else dp[j] = dp[j] + (dp[j + 1] || 0); 
    }
  }

  return dp[0];
};