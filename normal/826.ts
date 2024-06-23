function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  // sort work pairs by difficulty
  let workPairs: [number, number][] = [];
  for (let i = 0; i < difficulty.length; i++) {
    workPairs.push([difficulty[i], profit[i]]);
  }
  workPairs.sort((a, b) => a[0] - b[0]);

  // iterate through the worker  
  worker.sort((a, b) => a - b);
  let totalProfit = 0;
  let maxProfit = 0;
  let index = 0;
  for (const afford of worker) {
    while (workPairs[index] && workPairs[index][0] <= afford) {
      maxProfit = Math.max(maxProfit, workPairs[index][1]);
      index++;
    }
    totalProfit += maxProfit;
  }
  
  return totalProfit;
};