class dNode {
  val: number;
  prev: dNode | null;
  next: dNode | null;

  constructor(val: number, prev?: dNode | null , next?: dNode | null) {
    this.val = val;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }
}

class MyLinkedList {
  private head: dNode | null = null;

  get(index: number): number {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      if (curr === null) return -1;
      curr = curr.next;
    }
    return curr === null ? -1 : curr.val;
  }

  addAtHead(val: number): void {
    if (this.head === null) {
      this.head = new dNode(val);
      return;
    }
    this.head.prev = new dNode(val, null, this.head);
    this.head = this.head.prev;
  }

  addAtTail(val: number): void {
    let curr = this.head;
    if (curr === null) {
      this.addAtHead(val);
      return
    }

    while(curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new dNode(val, curr, null);
  }

  addAtIndex(index: number, val: number): void {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr === null) return;
    curr = curr.next;
  }
  if (curr === null) {
    this.addAtTail(val);
    return;
  }
  let newNode = new dNode(val, curr.prev, curr);
  if (curr.prev !== null) {
    curr.prev.next = newNode;
  }
  curr.prev = newNode;
}

  deleteAtIndex(index: number): void {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      if (curr === null) return;
      curr = curr.next;
    }
    if (curr === null) return;
    if (curr.prev !== null) {
      curr.prev.next = curr.next;
    }
    if (curr.next !== null) {
      curr.next.prev = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/