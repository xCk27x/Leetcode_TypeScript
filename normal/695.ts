function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;

  function deleteIsland(y: number, x: number): number {
    if (!grid[y] || !grid[y][x]) return 0;

    let size = 1;
    grid[y][x] = 0;

    for (let [xDir, yDir] of [[0, 1], [-1, 0], [0 ,-1], [1, 0]]) {
      size += deleteIsland(y + yDir, x + xDir);
    }

    return size;
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      maxArea = Math.max(maxArea, deleteIsland(i, j));      
    }
  }

  return maxArea;
};