function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  const stack = new Map<string, number>();
  
  for (let i = 0; i < word.length; i += k) {
    const sub = word.slice(i, i + k);
    stack.set(sub, (stack.get(sub) || 0) + 1);
  }

  let max = Math.max(...stack.values());

  return (word.length  / k) - max;
};

console.log(minimumOperationsToMakeKPeriodic('leetcodeleet', 4)); // 0
console.log(minimumOperationsToMakeKPeriodic('leetcoleet', 2)); // 0