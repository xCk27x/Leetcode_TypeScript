
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let newEnd = new ListNode(0, null);

  while (head !== null) {
    let temp = newEnd.next;
    let nextNode = head.next;
    newEnd.next = head;
    head.next = temp;
    head = nextNode;
  }

  return newEnd.next;
};

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // 5 -> 4 -> 3 -> 2 -> 1

