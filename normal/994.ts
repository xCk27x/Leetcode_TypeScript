function orangesRotting(grid: number[][]): number {
  const stack: [number, number][] = [];
  let step = 0;
  let fresh = 0;

  // find initial rotten oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2)
        stack.push([i, j]);
      else if (grid[i][j] === 1)
        fresh++;
    }
  } 

  // BFS and use count to track the number of oranges in the current level
  let count = stack.length;
  while (stack.length > 0) {
    const [i, j] = stack.shift()!;
    for (const [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
      if (grid[x] && grid[x][y] === 1) {
        grid[x][y] = 2;
        stack.push([x, y]);
        fresh--;
      }
    }
    if (--count === 0) {
      count = stack.length;
      step++;
    }
  }

  // check if there are any fresh oranges left
  if (fresh > 0) return -1;

  // since the code sequence of doing BFS, we need to return step - 1 if BFS is being done
  return step === 0 ? 0 : step - 1;
};