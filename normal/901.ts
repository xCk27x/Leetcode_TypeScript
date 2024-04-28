class StockSpanner {
  private Stack: number[][] = [[Infinity, -1]];
  private i = -1;

  next(price: number): number {
    this.i++;

    while (
      this.Stack.length > 0 &&
      price >= this.Stack[this.Stack.length - 1][0]
    ) {
      this.Stack.pop();
    }
    this.Stack.push([price, this.i]);
    
    return this.i - this.Stack[this.Stack.length - 2][1];
  }
}
