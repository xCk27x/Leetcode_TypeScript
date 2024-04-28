function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const final: boolean[] = new Array(n).fill(true);
  const timesOut: number[] = new Array(n).fill(0);
  
  for (let i = 0; i < edges.length; i++) {
    // console.log(edges[i], i, n);
    timesOut[edges[i][0]]++;
    timesOut[edges[i][1]]++;
  }
  while (edges.length > 1) {
    const times = timesOut;


    const nextRound: number[][] = [];
    for (let [left, right] of edges) {
      if (times[left] <= 1)
        times[right] <= 1 ? 
        [final[left], final[right]] = [false, false] : 
        final[left] = false;
      else if (times[right] <= 1)
        final[right] = false;
      else
        nextRound.push([left, right]);
    }
    edges = nextRound;
    // console.log(edges, n);
  }

  const re: number[] = [];
  final.forEach((v, i) => {if (v === true) re.push(i)});
  return re; 
}

function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n < 3) return n === 1 ? [0] : [0, 1];

  const node2Edges = new Map<number, number[]>();
  
  for (let [from, to] of edges) {
    node2Edges.has(from) ? node2Edges.get(from)!.push(to) : node2Edges.set(from, [to]);
    node2Edges.has(to) ? node2Edges.get(to)!.push(from) : node2Edges.set(to, [from]);
  }

  const leaves: [number, number[]][] = [];
  for (let node of node2Edges.entries()) {
    if (node[1].length === 1) leaves.push(node);
  }

  while (node2Edges.size > 2) {
    const curLeaves = [...leaves];
    leaves.length = 0;

    for (let [leafNum, [parentNum]] of curLeaves) {
      node2Edges.delete(leafNum);
      const parentEdges = node2Edges.get(parentNum);
      parentEdges!.splice(parentEdges!.indexOf(leafNum), 1);
      
      if (parentEdges!.length === 1) leaves.push([parentNum, parentEdges!]);
    }
  }

  return [...node2Edges.keys()];
}


console.log(findMinHeightTrees2(4, [[1, 0], [1, 2], [1, 3]])); // [1]
console.log(findMinHeightTrees2(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])); // [3, 4]