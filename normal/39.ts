function combinationSum(candidates: number[], target: number): number[][] {
  if (target === 0) return [[]];
  if (candidates.length === 0) return [];
  
  let n = candidates[0];
  let temp: number[] = [];
  let result: number[][] = [];
  let next = candidates.slice(1);


  for (let t = 0; t * n <= target; t++) {
    result.push(...combinationSum(next, target - t*n).map(
      arr => temp.concat(arr)
    ));
    temp.push(n);
  }

  return result;
};