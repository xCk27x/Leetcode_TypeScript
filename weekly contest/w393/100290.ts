function minimumOperations(grid: number[][]): number {
  const dp = new Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(-1));

  dp[0][0] = 0;
  console.log(dp);

  function minimumOperationsHelper(grid: number[][]): number {
    if (grid.length === 1 && grid[0].length === 1) {
      dp[0][0] = 0;
      return dp[0][0];
    }

    if (dp[grid.length - 1] && dp[grid.length - 1][grid[0].length - 1] !== -1)
      return dp[grid.length - 1][grid[0].length - 1];


    const deleteFirstColGrid = grid.map((row) => row.slice(1));
    const deleteFirstRowGrid = grid.slice(1);

    let bottom = minimumOperationsHelper(deleteFirstRowGrid);
    if (grid[0][0] !== grid[1][0]) bottom++;

    let right = minimumOperationsHelper(deleteFirstColGrid);
    if (grid[0][0] === grid[0][1]) right++;

    dp[grid.length - 1][grid[0].length - 1] = Math.max(bottom, right);
    console.log(dp);
    return dp[grid.length - 1][grid[0].length - 1];
  }

  return minimumOperationsHelper(grid);
}

console.log(
  minimumOperations([
    [1, 0, 2],
    [1, 0, 2],
  ])
); // 0
