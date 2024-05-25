function beautifulSubsets(nums: number[], k: number): number {
  
  nums.sort((a, b) => a - b);
  
  const stack: number[][] = [[]];
  let amount = 1;  

  for (const num of nums) {
    const times = amount;
    for (let i = 0; i < times; i++) {
      if (!stack[i].includes(num - k)) {
        stack.push([...stack[i], num]);
        amount++;
      }
    }
  }

  return stack.length - 1;
};

function beautifulSubsets2(nums: number[], k: number): number {
  const map = new Map<number, Map<number, number>>();
  let sum = 1;

  for (const num of nums) {
    const remainder = num % k;
    if (!map.has(remainder)) {
      map.set(remainder, new Map());
    }
    const remainderMap = map.get(remainder)!;
    remainderMap.set(num, (remainderMap.get(num) || 0) + 1);
  }

  for (let fr of map.values()) {
    const subsets = Array.from(fr.entries()).sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < subsets.length; i++) {
      
    }
  }

  return 0;
}