class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {  
  let dummy = new ListNode(0, head);
  while (head !== null && n > 0) {
    head = head.next;
    n--;
  }
  let r: ListNode | null = dummy, l: ListNode | null = dummy.next;
  while (head !== null) {
    head = head.next;
    r = r?.next ? r.next : null;
    l = l?.next ? l.next : null;
  }
  r!.next = l?.next ? l.next : null;

  return dummy.next;
};

console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2));
console.log(removeNthFromEnd(new ListNode(1), 1));
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1));