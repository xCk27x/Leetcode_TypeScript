function totalCost(costs: number[], k: number, candidates: number): number {
  const leftMpq = new minPriorityQueue();
  const rightMpq = new minPriorityQueue();
  let sum = 0;
  let leftIndex = 0,
    rightIndex = costs.length - 1;
  for (let i = 0; i < candidates && leftIndex <= rightIndex; i++, leftIndex++, rightIndex--) {
    leftMpq.add(costs[leftIndex]);
    if (leftIndex >= rightIndex) {
      rightIndex--;
      break;
    }
    rightMpq.add(costs[rightIndex]);
  }

  for (let i = 0; i < k; i++) {
    if (leftMpq.top() && rightMpq.top()) {
      if (leftMpq.top()! <= rightMpq.top()!) {
        sum += leftMpq.remove();
        if (leftIndex <= rightIndex) leftMpq.add(costs[leftIndex]);
        leftIndex++;
      } else {
        sum += rightMpq.remove();
        if (leftIndex <= rightIndex) rightMpq.add(costs[rightIndex]);
        rightIndex--;
      }
    } else {
      sum += leftMpq.top() === undefined ? rightMpq.remove() : leftMpq.remove();
    }
  }

  return sum;
}
