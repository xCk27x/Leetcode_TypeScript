function subarraysDivByK(nums: number[], k: number): number {
  const modNumSum = new Array(k).fill(0);
  modNumSum[0] = 1;
  let result = 0;
  
  let acc = 0;
  for (const num of nums) {
    acc += num;
    const mod = ((acc % k) + k) % k;
    result += modNumSum[mod];
    modNumSum[mod]++;
  }

  return result;
};