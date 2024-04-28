function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const adjList: number[][] = Array.from({ length: n }, () => []);
  const treeNodeAmount = new Array(n).fill(1);
  const treeSteps = new Array(n).fill(0);

  // build adjacency list
  for (let [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // count each subtree's node amount and steps
  function dfs1(parent: number, self: number) {
    for (let adjNode of adjList[self]) {
      if (adjNode !== parent) {
        dfs1(self, adjNode);
        treeNodeAmount[self] += treeNodeAmount[adjNode];
        treeSteps[self] += treeNodeAmount[adjNode] + treeSteps[adjNode];
      }
    }
  }

  // count each node's total steps
  function dfs2(parent: number, self: number) {
    for (let adjNode of adjList[self]) {
      if (adjNode !== parent) {
        treeSteps[adjNode] = treeSteps[self] - treeNodeAmount[adjNode] + (n - treeNodeAmount[adjNode]);
        dfs2(self, adjNode);
      }
    }
  }

  dfs1(-1, 0);
  dfs2(-1, 0);

  return treeSteps;
}

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]])); // [8,12,6,10,10,10]