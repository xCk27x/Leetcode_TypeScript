function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const re: number[] = new Array(arr.length)
  for (let index = 0; index < arr.length; index++) {
    re[index] = fn(arr[index], index);
  }
  return re;
};