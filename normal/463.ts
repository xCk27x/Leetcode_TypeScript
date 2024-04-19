function islandPerimeter(grid: number[][]): number {
  function firstLand(): number[] {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }

  function dfs(i: number, j: number): number {
    if (!grid[i] || !grid[i][j]) return 1;
    if (grid[i][j] === 2) return 0;
    
    grid[i][j] = 2;
    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  }

  let [i, j] = firstLand();
  if (i === -1 && j === -1)
    return 0;
  else 
    return dfs(i, j);
};