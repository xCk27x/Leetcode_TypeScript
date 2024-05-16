import { PriorityQueue } from "@datastructures-js/priority-queue";

function maximumSafenessFactor(grid: number[][]): number {
  let n = grid.length;
  const dire = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let distToThief = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const queue: [number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        distToThief[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;
    for (const [y, x] of dire) {
      const nextRow = row + y, nextCol = col + x;
      if (distToThief[nextRow] && distToThief[nextRow][nextCol] === Infinity) {
          distToThief[nextRow][nextCol] = distToThief[row][col] + 1;
          queue.push([nextRow, nextCol]);
      }
    }
  }

  const pq = new PriorityQueue({compare: (a, b) => b[0] - a[0]});
  const haventVisited = Array.from({ length: n }, () => Array(n).fill(true));
  pq.enqueue([distToThief[0][0], 0, 0]);
  haventVisited[0][0] = false;

  while (pq.size()) {
    const [val, i, j] = pq.dequeue();
    if (i === n - 1 && j === n - 1) return val;

    for (let d of dire) {
      const nextRow = i + d[0], nextCol = j + d[1];
      if (haventVisited[nextRow] && haventVisited[nextRow][nextCol]) {
        haventVisited[nextRow][nextCol] = false;
        pq.enqueue([Math.min(val, distToThief[nextRow][nextCol]), nextRow, nextCol]);
      }
    }
  }

  return -1;
}

console.log(
  maximumSafenessFactor([
    [0, 0, 1],
    [0, 0, 0],
    [1, 0, 0],
  ])
); // 2
