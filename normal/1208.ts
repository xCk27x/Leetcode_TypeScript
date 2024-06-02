function equalSubstring(s: string, t: string, maxCost: number): number {
  const costs: number[] = [];
  for (let i = 0; i < s.length; i++) {
    costs.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)));
  }

  let maxLength = 0;
  let tempCost = 0;
  for (let i = 0, j = 0; j < costs.length; j++)  {
    tempCost += costs[j];
    if (tempCost <= maxCost) {
      maxLength = Math.max(maxLength, j - i + 1);
    } else {
      while (tempCost > maxCost) {
        tempCost -= costs[i];
        i++;
      }
    }
  }

  return maxLength;
};