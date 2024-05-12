function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let l: [number, number, number][] = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      l.push([arr[i], arr[j], arr[i] / arr[j]]);
    }
  }

  l.sort((a, b) => a[2] - b[2]);
  
  return [l[k - 1][0], l[k - 1][1]];
};

class MinPriorityQueue {
  heap: [number, number, number][] = [[-1, -1 , NaN]];
  
  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  add(val: [number, number, number]): void {
    this.heap.push(val);
    for (let i = this.heap.length - 1; Math.floor(i / 2) >= 1; i = Math.floor(i / 2)) {
      if (this.heap[i][2] < this.heap[Math.floor(i / 2)][2])
        this.swap(i, Math.floor(i / 2));
      else
        break;
    }
  }

  remove(): [number, number, number]{
    if (this.heap.length <= 1)
      return [-1, -1, NaN];

    console.log(this.heap[1]);
    const re = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    for (let i = 1; i * 2 < this.heap.length;) {
      let next = i * 2;
      if (i * 2 + 1 < this.heap.length && this.heap[i * 2][2] > this.heap[i * 2 + 1][2])
        next = i * 2 + 1;
      if (this.heap[i][2] > this.heap[next][2]) {
        this.swap(i, next);
        i = next;
      } else {
        break;
      }
    }

    return re;
  }
}

function kthSmallestPrimeFraction2(arr: number[], k: number): number[] {
  let q = new MinPriorityQueue();
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    q.add([i, n - 1 ,arr[i] / arr[n - 1]]);
  }

  for (let i = 0; i < k - 1; i++) {
    let [a, b, _] = q.remove();
    if (b - 1 > a) {
      q.add([a, b - 1, arr[a] / arr[b - 1]]);
    }
  }

  let [a, b, _] = q.remove();

  return [arr[a], arr[b]];
}