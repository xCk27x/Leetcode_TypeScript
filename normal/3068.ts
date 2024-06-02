function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  
  const mod = nums.map(n => (n^k) - n)
              .sort((a, b) => b - a);
  let re = nums.reduce((p, n) => p + n, 0);

  while (mod.length >= 2) {
    const pairSum = mod.shift()! + mod.shift()!;
    re += pairSum > 0 ? pairSum : 0;
  }

  return re;
};