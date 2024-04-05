class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // l1 && l2 null check
  if (l1 === null && l2 === null) return null;
  else if (l1 === null) return l2;
  else if (l2 === null) return l1;
  else {
    let sum = l1.val + l2.val;
    // sum < 10
    if (sum < 10) return new ListNode(sum, addTwoNumbers(l1?.next ? l1.next : null, l2?.next ? l2.next : null));
    // sum >= 10
    else {
      if (l1.next && l2.next) {
        // l1.next && l2.next exist
        l1.next.val += 1;
        return new ListNode(sum - 10, addTwoNumbers(l1.next, l2.next));
      } else if (l1.next) {
        // l2.next not exist
        l2.next = new ListNode(1);
        return new ListNode(sum - 10, addTwoNumbers(l1.next, l2.next));
      } else if (l2.next) {
        // l1.next not exist
        l1.next = new ListNode(1);
        return new ListNode(sum - 10, addTwoNumbers(l1.next, l2.next));
      } else {
        // l1.next && l2.next not exist
        return new ListNode(sum - 10, new ListNode(1));
      }
    }
  }
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
