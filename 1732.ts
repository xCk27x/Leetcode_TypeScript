function largestAltitude(gain: number[]): number {
  let heap = 0, temp = 0;
  for (let gap of gain) {
    temp += gap;
    heap = temp > heap ? temp : heap; 
  } 
  return heap;
};