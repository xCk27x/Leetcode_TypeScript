function minimumArea(grid: number[][]): number {
  let top = grid.length - 1;
  let bottom = 0;
  let left = grid[0].length - 1;
  let right = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        top = Math.min(top, i);
        bottom = Math.max(bottom, i);
        left = Math.min(left, j);
        right = Math.max(right, j);
      }
    }
  }

  return (right - left + 1) * (bottom - top + 1);
};

console.log(minimumArea([[0,1,0],[1,0,1]])); // 6
console.log(minimumArea([[0,0],[1,0]])); // 6