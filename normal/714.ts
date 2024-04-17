function maxProfit(prices: number[], fee: number): number {
  let cash: number = 0; 
  let stock: number = -Infinity;
  let cashStack: number[] = [];
  let stockStack: number[] = [];
  
  for (let p of prices) {
    // 今天不買 or 今天賣出 
    cash = Math.max(cash, stock + p - fee);
    cashStack.push(cash);
    // 今天不賣 or 今天買進
    stock = Math.max(stock, cash - p);
    stockStack.push(stock);
  }

  console.log(cashStack);
  console.log(stockStack);

  return cash
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
// console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6