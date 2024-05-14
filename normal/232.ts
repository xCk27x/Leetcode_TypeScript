class MyQueue {
  private pushStack: number[] = [];
  private popStack: number[] = [];

  push(x: number): void {
    this.pushStack.push(x);
  }
  pop(): number {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop()!);
      }
    }
    return this.popStack.pop()!;
  }
  peek(): number {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop()!);
      }
    }
    return this.popStack[this.popStack.length - 1];
  }
  empty(): boolean {
    if (this.pushStack.length || this.popStack.length)
      return false;
    return true;
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/