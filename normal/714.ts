function maxProfit(prices: number[], fee: number): number {
  let cash: number = 0; 
  let stock: number = -Infinity;
  
  for (let p of prices) {
    cash = Math.max(cash, stock + p - fee);
    stock = Math.max(stock, cash - p);
  }

  return cash
};