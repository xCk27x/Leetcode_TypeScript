function minimumTime(n: number, edges: number[][], disappear: number[]): number[] {
  if (disappear.length === 0) return [0];
  
  let re = new Array(n).fill(-1);
  re[0] = 0;
  let stack: number[] = [0];
  let time = [0];
  
  edges.forEach(e => {
    if (e[0] > e[1]) {
      let tmp = e[0];
      e[0] = e[1];
      e[1] = tmp;
    }
  })
  edges.sort((a, b) => a[0] - b[0]);

  while (stack.length > 0) {
    let curNode = stack.shift();
    let curTime = time.shift()!;

    while (edges[0] && edges[0][0] === curNode) {
      let nextNodeEdge = edges.shift()!;

      if (curTime + nextNodeEdge[2] < disappear[nextNodeEdge[1]]) {
        stack.push(nextNodeEdge[1]);
        time.push(curTime + nextNodeEdge[2]);
        re[nextNodeEdge[1]] = curTime + nextNodeEdge[2];
      }
    }
  }

  return re;
};

console.log(minimumTime(3, [[0,1,2],[1,2,1],[0,2,4]], [1,1,5])); // [0,1,2,3,4]
console.log(minimumTime(3, [[0,1,2],[1,2,1],[0,2,4]], [1,3,5])); // [0,2,3]
console.log(minimumTime(2, [[0,1,1]], [1, 1])); // [0,2,3]