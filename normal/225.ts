class MyStack {
  private q1: number[] = [];
  private q2: number[] = [];
  private isp1Empty: boolean = true;

  push(x: number): void {
    if (this.isp1Empty) {
      this.q1.push(x);
      while (this.q2.length) {
        this.q1.push(this.q2.shift()!);
      }
    } else {
      this.q2.push(x);
      while (this.q1.length) {
        this.q2.push(this.q1.shift()!);
      }
    }
    this.isp1Empty = !this.isp1Empty;
  }
  pop(): number {
    return this.isp1Empty ? this.q2.shift()! : this.q1.shift()!;
  }
  top(): number {
    return this.isp1Empty ? this.q2[0]! : this.q1[0];
  }
  empty(): boolean {
    if (this.q1.length || this.q2.length) return false;
    return true;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
