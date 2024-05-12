function combinationSum2(candidates: number[], target: number): number[][] {
  
  function helper(candidates: number[], target: number): number[][] {
    if (candidates.length === 0) return [];
    
    let remain = target - candidates[0];
    
    if (remain > 0) {
      let next = candidates.length;
      for (let i = 1; i < candidates.length; i++) {
        if (candidates[i] !== candidates[0]) {
          next = i;
          break;
        }
      }
      return helper(candidates.slice(1), remain)
      .map(ans=> [candidates[0]].concat(ans))
      .concat(helper(candidates.slice(next), target));
    } else if (remain < 0) {
      return [];
    } else {
      return [[target]];
    }
  };
  
  candidates.sort((a, b) => a - b);
  return helper(candidates, target);
}