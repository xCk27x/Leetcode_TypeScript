function countTriplets(arr: number[]): number {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let acc = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      acc ^= arr[k];
      if (acc === 0) count += k - i;
    }
  }

  return count;
};