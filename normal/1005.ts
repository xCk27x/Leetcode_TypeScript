function largestSumAfterKNegations(nums: number[], k: number): number {
  
  const queue = new MinPriorityQueue();
  for (let num of nums) {
    queue.enqueue(num);
  }

  for (let i = 0; i < k; i++) {
    const num = queue.dequeue().element;
    queue.enqueue(-num); 
  }

  let sum = 0;
  while (!queue.isEmpty()) {
    sum += queue.dequeue().element;
  }

  return sum;
};