function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0, j = 0 ; j < s.length; i++, j++) {
    while (g[i] > s[j]) i++
    if (g[i] === undefined) break;
    sum++;
  }

  return sum;
};