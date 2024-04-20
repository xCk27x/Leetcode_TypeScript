class SmallestInfiniteSet {
  private list: number[] = [];
  private curNum: number = 1;

  popSmallest(): number {
    if (this.list.length > 0) {
      return this.list.shift()!;
    }
    return this.curNum++;
  }

  addBack(num: number): void {
    if (num < this.curNum && !this.list.includes(num)) {
      this.list.push(num)
      this.list.sort((a, b) => a - b); 
    }
    return;
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
