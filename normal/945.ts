function minIncrementForUnique(nums: number[]): number {
  const len = Math.max(...nums) + nums.length;
  const arr = Array(len).fill(0);

  nums.forEach((num) => {
    arr[num] += 1;
  });

  let sum = 0;
  arr.reduce((add, ori) => {
    let trans = add + ori - 1;
    if (trans < 0) trans = 0;
    sum += trans;
    return trans;
  }, 0);

  return sum;
}
