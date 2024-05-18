function combine(n: number, k: number, start: number = 1): number[][] {
  if (k === 0) return [[]];

  const re: number[][] = [];
  for (let i = start; i <= n; i++) {
    re.push(
      ...combine(n, k-1, i+1)
      .map(arr => [i, ...arr])
    );
  }

  return re;
};

function combine2(n: number, k: number): number[][] {
  if (k === 1) 
    return new Array(n).fill(0).map((_, i) => [i + 1]);
  if (n === k) 
    return [new Array(n).fill(0).map((_, i) => i + 1)];

  return combine(n - 1, k - 1).map(arr => 
    arr.concat(n)
  ).concat(combine(n - 1, k));
};