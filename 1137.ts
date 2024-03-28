function tribonacci(n: number): number {
  
  let triList: number[] = [0, 1, 1];
  if (n <= 2) return triList[n];
  
  for (let i = 3; i <= n; i++) {
    triList.push(triList[i-1] + triList[i-2] + triList[i-3]);
  }
  return triList.pop()!;
};