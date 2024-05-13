function allPathsSourceTarget(graph: number[][]): number[][] {  
  let n = graph.length - 1;
  let result: number[][] = [];

  function helper(node: number, path: number[]) {
    if (node === n) {
      result.push(path);
      return;
    }

    for (let i of graph[node]) {
      helper(i, path.concat(i));
    }
  }

  helper(0, [0]);
  return result;
};