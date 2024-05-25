function subsets(nums: number[]): number[][] {
  let re: number[][] = [[]];
  
  for (let n of nums) {
    let len = re.length;
    for (let j = 0; j < len; j++) {
      re.push([...re[j], n]);
    }
  }

  return re;
};