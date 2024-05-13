function maxScore(grid: number[][]): number {
  const dp = Array.from({ length: grid.length }, 
    () => Array.from({ length: grid[0].length }, () => 0));
  let maxGap = -Infinity;
  
  function findMax(i: number, j: number): number {
    if (i >= grid.length || j >= grid[0].length) 
      return -Infinity;
    if (dp[i][j] !== 0) 
      return dp[i][j];

    let max = Math.max(findMax(i+1, j), findMax(i, j+1));
    maxGap = Math.max(maxGap, max - grid[i][j]);
    dp[i][j] = Math.max(max, grid[i][j]);
    return dp[i][j];
  }
  
  findMax(0, 0);
  return maxGap;
};

console.log(maxScore( [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]])); // 0
console.log(maxScore([[4,3,2],[3,2,1]])); // 0
console.log(maxScore([[10,5],[5,1]])); // 0