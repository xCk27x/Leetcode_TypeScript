function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  const len = profits.length;

  // make a list to store the pair of capital and profit
  const cap2Pro: [number, number][] = [];
  for (let i = 0; i < len; i++) {
    cap2Pro.push([capital[i], profits[i]]);
  }
  cap2Pro.sort((a, b) => a[0] - b[0]);

  // use a max priority queue to store current profit
  let curW = w;
  let curIndex = 0;
  const queue = new MaxPriorityQueue();
  for (let i = 0; i < k; i++) {
    while (curIndex < len && cap2Pro[curIndex][0] <= curW) {
      queue.enqueue(cap2Pro[curIndex][1]);
      curIndex++;
    }

    if (queue.isEmpty()) return curW;
    curW += queue.dequeue().element
  }

  return curW;
}
