function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  
  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  const arr = Array.from(map.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  const re: number[] = [];
  for (let i = 0; i < k; i++) {
    re.push(arr[i][0]);
  }

  return re;
}
