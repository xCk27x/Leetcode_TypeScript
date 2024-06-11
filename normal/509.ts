function fib(n: number): number {
  const dp: number[] = [0, 1, 1];
  
  function fib_helper(n: number): number {
    if (dp[n] !== undefined) return dp[n];

    dp.push(fib_helper(n-1) + fib_helper(n-2));
    return dp[n];
  }
  
  return fib_helper(n);
};