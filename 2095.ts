class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null;
  let dummy: ListNode | null = head;
  let re = new ListNode(0, head);
  let len = 0;

  while (dummy !== null) {
    dummy = dummy.next;
    len++;
  }

  len = Math.floor(len / 2);
  for (let i = 0; i < len - 1; i++) {
    head = head!.next;
  }
  head!.next = head!.next!.next;
  
  return re.next;
};

console.log(deleteMiddle(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // 1 -> 2 -> 4 -> 5
console.log(deleteMiddle(new ListNode(1, new ListNode(2)))); // 1 -> 2 -> 4