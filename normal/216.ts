function combinationSum3(k: number, n: number, start: number = 1): number[][] {
  if (k === 1) return n <= 9 ? [[n]] : [];
  if (start * k >= n) return [];

  return combinationSum3(k - 1, n - start, start + 1)
    .map((arr) => [start, ...arr])
    .concat(combinationSum3(k, n, start + 1))
}

console.log(combinationSum3(3, 7)); // [[1,2,4]]