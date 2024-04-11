class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function oddEvenList(head: ListNode | null): ListNode | null {


  let evenHead = new ListNode(0, head);
  let oddHead = new ListNode(0, head.next);

  while (head?.next) {
    let temp = head.next;
    console.log(temp);
    head.next = head.next.next;
    if (head.next !== null) {
      head = head.next;
      temp.next = temp.next!.next;
    }
  }
  head.next = oddHead.next;

  return evenHead.next;
};

console.log(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))))); // 1 -> 3 -> 5 -> 2 -> 4