function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const rowMap: Map<string, number> = new Map();
  let count = 0;

  for (let row of grid) {
    const rowStr = row.join(' '), ele = rowMap.get(rowStr)
    ele ? rowMap.set(rowStr, ele + 1) : rowMap.set(rowStr, 1);
  }

  for (let i = 0; i < n; i++) {
    const stack: number[] = [];
    for (let j = 0; j < n; j++) {
      stack.push(grid[j][i]);
    }
    count += rowMap.get(stack.join(' ')) ?? 0;
  }

  return count;
}

console.log(equalPairs([[1, 2], [3, 4]]));
