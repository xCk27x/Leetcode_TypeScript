class MyStack {
  private q1: number[] = [];
  private q2: number[] = [];
  private is1: boolean = true;

  push(x: number): void {
    if (this.is1) {
      this.q1.push(x);
      while (this.q2.length) {
        this.q1.push(this.q2.shift()!)
      }
    } else {
      this.q2.push(x);
      while (this.q1.length) {
        this.q2.push(this.q1.shift()!)
      }
    }
    this.is1 = !this.is1;
  }
  pop(): number {
    return this.is1 ? this.q2.shift()! : this.q1.shift()!;
  }
  top(): number {
    return this.is1 ? this.q2[0]! : this.q1[0];
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