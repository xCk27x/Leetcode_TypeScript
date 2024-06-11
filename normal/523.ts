function checkSubarraySum(nums: number[], k: number): boolean {
  let acc = 0;
  const modMap: {[key: number]: number} = {0: -1};

  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    const tempMod = acc % k;

    if (modMap[tempMod] === undefined) {
      modMap[tempMod] = i;
    } 
    
    if (i - modMap[tempMod] >= 2) {
      return true;
    }
  }

  return false;
};