class maxPriorityQueue {
  heap: number[] = [NaN];

  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  add(val: number): void {
    this.heap.push(val);
    for (let i = this.heap.length - 1; Math.floor(i / 2) >= 1; i = Math.floor(i / 2)) {
      if (this.heap[i] > this.heap[Math.floor(i / 2)]) this.swap(i, Math.floor(i / 2));
      else break;
    }
  }

  remove(): number {
    if (this.heap.length <= 1) return NaN;

    const re = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();

    for (let i = 1; i * 2 < this.heap.length; ) {
      let next = i * 2;
      if (i * 2 + 1 < this.heap.length && this.heap[i * 2] < this.heap[i * 2 + 1]) next = i * 2 + 1;
      if (this.heap[i] < this.heap[next]) {
        this.swap(i, next);
        i = next;
      } else {
        break;
      }
    }

    return re;
  }

  seek(): number {
    return this.heap[1];
  }
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  let cp: [number, number][] = new Array(quality.length);
  for (let i = 0; i < quality.length; i++) {
    cp[i] = [wage[i] / quality[i], quality[i]];
  }
  cp.sort((a, b) => a[0] - b[0]);

  let qSum = 0;
  let mpq = new maxPriorityQueue();

  for (let i = 0; i < k; i++) {
    mpq.add(cp[i][1]);
    qSum += cp[i][1];
  }
  
  let ans = qSum * cp[k - 1][0];

  for (let i = k; i < cp.length; i++) {
    let next = cp[i];
    mpq.add(next[1]);
    let most = mpq.remove();

    qSum = qSum - most + next[1];

    ans = Math.min(ans, qSum * next[0]);
  }

  return ans;
}

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)); // 105
console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)); // 30
console.log(mincostToHireWorkers([1, 2], [14, 16], 1)); // 25
console.log(
  mincostToHireWorkers([32, 43, 66, 9, 94, 57, 25, 44, 99, 19], [187, 366, 117, 363, 121, 494, 348, 382, 385, 262], 4)
); // 25

class Worker1 {
  quality: number;
  wage: number;
  ratio: number;

  constructor(quality: number, wage: number) {
    this.quality = quality;
    this.wage = wage;
    this.ratio = wage / quality;
  }
}

function mincostToHireWorkers2(quality: number[], wage: number[], k: number): number {
  const n: number = quality.length;
  const workers: Worker1[] = [];

  for (let i = 0; i < n; i++) {
    workers.push(new Worker1(quality[i], wage[i]));
  }
  workers.sort((a, b) => a.ratio - b.ratio);

  let ans: number = Number.MAX_SAFE_INTEGER;
  let sumq: number = 0;
  const pool: number[] = [];

  for (const worker of workers) {
    pool.push(worker.quality);
    sumq += worker.quality;

    if (pool.length > k) {
      pool.sort((a, b) => b - a);
      sumq -= pool.shift()!;
    }

    if (pool.length === k) {
      ans = Math.min(ans, sumq * worker.ratio);
    }
  }

  return ans;
}

console.log(mincostToHireWorkers2([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)); // 30
