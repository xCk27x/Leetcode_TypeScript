function findKthLargest(nums: number[], k: number): number {
  function swapMaxHeapElement(heap: number[], i: number, j: number): void {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  function buildMaxHeap(nums: number[]): number[] {
    const heap: number[] = new Array(nums.length + 1).fill(-Infinity);
    for (let i = 1; i < heap.length; i++) {
      let j = i;
      let topLevel = Math.floor(j / 2);
      heap[j] = nums[j - 1];
      
      while (topLevel >= 1) {
        if (heap[j] > heap[topLevel]) swapMaxHeapElement(heap, j, topLevel);
        j = topLevel;
        topLevel = Math.floor(j / 2);
      }
    }
    return heap;
  }
  
  function popMaxHeap(heap: number[]): number {
    let i = 1;
    swapMaxHeapElement(heap, i, heap.length - 1);
    let result = heap.pop()!;
  
    while (i * 2 < heap.length) {
      let maxIndex = i;
      if (heap[i] < heap[i*2]) maxIndex = i*2;
      if (i * 2 + 1 < heap.length && heap[maxIndex] < heap[i*2+1]) maxIndex = i*2+1;
      if (maxIndex === i) break;
      swapMaxHeapElement(heap, i, maxIndex);
      i = maxIndex;
    }
    return result;
  }
  
  const maxHeap: number[] = buildMaxHeap(nums);
  let re: number = -Infinity;
  for (let i = 0; i < k; i++) {
    re = popMaxHeap(maxHeap);
  }
  return re;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20));
