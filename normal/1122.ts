function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();  
  const result: number[] = [];

  for (const num of arr1) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of arr2) {
    let count = map.get(num);
    if (count) {
      for (let i = 0; i < count; i++) {
        result.push(num);
      }
      map.delete(num);
    }
  }

  const pairs = [...map.entries()].sort((a, b) => a[0] - b[0]);
  for (const [num, count] of pairs) {
    for (let i = 0; i < count; i++) {
      result.push(num);
    }
  }

  return result;
};