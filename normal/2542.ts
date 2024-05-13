class minPriorityQueue {
  heap: number[] = [NaN];
  
  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  add(val: number): void {
    this.heap.push(val);
    for (let i = this.heap.length - 1; Math.floor(i / 2) >= 1; i = Math.floor(i / 2)) {
      if (this.heap[i] < this.heap[Math.floor(i / 2)])
        this.swap(i, Math.floor(i / 2));
      else
        break;
    }
  }

  remove(): number{
    if (this.heap.length <= 1)
      return NaN;

    const re = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    for (let i = 1; i * 2 < this.heap.length;) {
      let next = i * 2;
      if (i * 2 + 1 < this.heap.length && this.heap[i * 2] > this.heap[i * 2 + 1])
        next = i * 2 + 1;
      if (this.heap[i] > this.heap[next]) {
        this.swap(i, next);
        i = next;
      } else {
        break;
      }
    }

    return re;
  }
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
  let stack: [number, number][] = [];
  for (let i = 0; i < nums1.length; i++) {
    stack.push([nums1[i], nums2[i]]);
  }
  // sort by decreasing order
  stack.sort((a, b) => b[1] - a[1]);

  let sum = 0;
  const mpq = new minPriorityQueue();
  for (let i = 0; i < k; i++) {
    sum += stack[i][0];
    mpq.add(stack[i][0]);
  }
  let max = sum * stack[k - 1][1];
  for (let i = k; i < nums1.length; i++) {
    sum = sum - mpq.remove() + stack[i][0];
    mpq.add(stack[i][0]);
    max = Math.max(max, sum * stack[i][1]);
  }

  return max;
};