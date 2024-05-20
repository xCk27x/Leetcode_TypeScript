function matrixScore(grid: number[][]): number {
  const n = grid.length, m = grid[0].length;
  let result = 2**(m-1) * n;

  for (let i = 0; i < n; i++) {
    if (grid[i][0] === 0) {
      grid[i] = grid[i].map(b => b === 0 ? 1 : 0);
    }
  }

  for (let i = 1; i < m; i++) {
    const c = grid.reduce((p, c) => p + c[i], 0);
    result += 2**(m-i-1) * (c > n/2 ? c : n - c);
  }

  return result;
};