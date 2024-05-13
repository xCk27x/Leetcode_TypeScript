function minReorder(n: number, connections: number[][]): number {
  // Create adjacency list
  const adjListDirect: number[][] = Array.from({ length: n }, () => []);
  const adjListUndirect: number[][] = Array.from({ length: n }, () => []);
  connections.forEach(([from, to]) => {
    adjListDirect[from].push(to);
    adjListUndirect[from].push(to);
    adjListUndirect[to].push(from);
  });

  // BFS
  const stack = [0];
  const visited = new Array(n).fill(false);
  let count = 0;

  while(stack.length > 0) {
    const curCity = stack.shift()!
    visited[curCity] = true;

    adjListUndirect[curCity].forEach((neighbor) => {
      if (!visited[neighbor]) {
        if (adjListDirect[curCity].includes(neighbor))
          count++;
        stack.push(neighbor);
      }
    });
  }

  return count;
};