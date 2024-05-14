function getMaximumGold(grid: number[][]): number {
  function findMaxGold(i: number, j: number): number {
    if (!grid[i] || !grid[i][j]) return 0;

    let record = grid[i][j],
    max = 0;
    grid[i][j] = 0;
    max = Math.max(
      findMaxGold(i + 1, j), 
      findMaxGold(i - 1, j), 
      findMaxGold(i, j + 1), 
      findMaxGold(i, j - 1)
    );
    grid[i][j] = record;

    return max + grid[i][j];
  }

  let maxGold = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) 
      maxGold = Math.max(maxGold, findMaxGold(i, j));

  return maxGold;
}
