function tribonacci(n: number): number {
  
  let triList: number[] = [0, 1, 1];
  if (n <= 2) return triList[n];
  
  for (let i = 3; i <= n; i++) {
    triList.push(triList[i-1] + triList[i-2] + triList[i-3]);
  }
  return triList.pop()!;
};

function tribonacci2(n: number): number {
  const triSeq = [0, 1, 1];
  for (let i = 2; i < n; i++) {
    triSeq.push(triSeq[i] + triSeq[i - 1] + triSeq[i - 2]);
  }
  return triSeq[n];
}