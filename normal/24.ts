
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let k = new ListNode(0, head.next)
    let c: ListNode | undefined | null = new ListNode(0, head.next)
    let t: ListNode = new ListNode(0, head);

    while (head !== null && head.next !== null) {
      head.next = head.next.next;
      c.next!.next = head;
      head = head.next;
      c.next = head?.next === undefined ? null : head.next;
      t.next!.next = c.next === null ? head : c.next;
      t.next = head;
    }
    return k.next;
};

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));