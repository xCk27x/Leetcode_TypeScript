function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  // Create adjacency list, with format Map<node, [neighbor, value][]>
  const adjList = new Map<string, [string, number][]>();
  equations.forEach(([dividend, divisor], i) => {
    adjList.set(dividend, adjList.get(dividend)?.concat([[divisor, values[i]]]) ?? [[divisor, values[i]]]);
    adjList.set(divisor, adjList.get(divisor)?.concat([[dividend, 1 / values[i]]]) ?? [[dividend, 1 / values[i]]]);
  });

  // BFS through queries
  const result: number[] = queries.map(([dividend, divisor]) => {
    if (!adjList.has(dividend) || !adjList.has(divisor)) return -1;
    if (dividend === divisor) return 1;

    // super important to use slice() here, otherwise the original adjList will be modified
    const stack = adjList.get(dividend)!.slice();
    const visited = new Set<string>([dividend]);

    while (stack.length > 0) {
      let next = stack.shift()!;
      if (next[0] === divisor) return next[1];
      if (visited.has(next[0])) continue;
      visited.add(next[0]);
      
      // push all neighbors of next into stack, with the value multiplied
      adjList.get(next[0])!.forEach(([node, value]) => {
        stack.push([node, value * next[1]]);
      });
    }
    return -1;
  });

  return result;
}

// console.log(calcEquation([["a","b"],["b","c"]], [2.0,0.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]));
// console.log(calcEquation([["a","b"],["c","d"]], [2.0,3.0], [["a","c"],["b","d"],["b","a"],["d","c"]]));
console.log(calcEquation([["a", "aa"]], [9.0], [["aa", "a"]]));
