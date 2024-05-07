function numTilings(n: number): number {
  const modulo = 1000000007;
  const array = [1, 3, 5];
  for (let i = 3; i < n; i++) {
    array.push((2 * array[i - 1] + array[i - 3]) % modulo)
  }
  return array[n - 1] ;
};