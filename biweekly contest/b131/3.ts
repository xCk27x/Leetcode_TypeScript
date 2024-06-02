function queryResults(limit: number, queries: number[][]): number[] {
  let colorAmount = 0;
  const result: number[] = [];
  const map = new Map<number, Set<number>>();
  const record: number[] = new Array(limit + 1).fill(0);
  

  for (let [id, color] of queries) {
    const last = map.get(record[id]);
    last?.delete(id);
    if (last?.size === 0) {
      colorAmount--;
    }
    record[id] = color;
    if (!map.has(color)) {
      map.set(color, new Set([id]));
      colorAmount++;
    } else {
      const temp = map.get(color);
      if (temp?.size === 0) {
        colorAmount++;
      }
      temp?.add(id);
    }
    result.push(colorAmount);
  }

  return result;
};

console.log(queryResults(4, [[1,4],[2,5],[1,3],[3,4]])); // [2,3,3,4,4]
console.log(queryResults(4, [[0,1],[1,2],[2,2],[3,4],[4,5]])); // [1,2,2,2,2]