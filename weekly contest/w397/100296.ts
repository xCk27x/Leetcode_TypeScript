function findPermutationDifference(s: string, t: string): number {
  const map1 = new Map<string, number>();
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    map1.set(s[i], i);
  }

  for (let i = 0; i < t.length; i++) {
    sum += Math.abs(i - map1.get(t[i])!);
  }

  return sum;
}

console.log(findPermutationDifference("abcde", "edbac")); // 0