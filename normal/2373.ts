function largestLocal(grid: number[][]): number[][] {
  const nineGrids = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  const n = grid.length;
  const re: number[][] = [];

  for (let i = 1; i < grid.length - 1; i++) {
    const row: number[] = [];
    for (let j = 1; j < grid[0].length - 1; j++) {
      row[j-1] = nineGrids.reduce((m, [x, y]) => {
        return Math.max(m, grid[i + y][j + x]);
      }, -Infinity);
    }
    re.push(row);
  }

  return re;
};

console.log(largestLocal([
  [9,9,8,1],
  [5,6,2,6],
  [8,2,6,4],
  [6,2,2,2]
])) // [[9, 9], [8, 6]]

console.log(largestLocal([
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,2,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1]
])) // [[2,2,2],[2,2,2],[2,2,2]]