function findMaxK(nums: number[]): number {
  const seen = new Set<number>();
  let k = -1;
  
  for (const num of nums) {
    if (seen.has(-num))
      k = Math.max(k, Math.abs(num))
    else 
      seen.add(num);
  }

  return k 
};