function subsetXORSum(nums: number[]): number {
  let sum = 0;
  const arr: number[][] = [[]];

  for (let n of nums) {
    const temp: number[][] = [];
    for (let e of arr) {
      let set = [...e, n];
      sum += set.reduce((acc, cur) => acc ^ cur, 0);
      temp.push(set);
    }
    arr.push(...temp);
  }
  return sum;
};