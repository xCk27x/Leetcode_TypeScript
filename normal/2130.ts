class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function pairSum(head: ListNode | null): number {
  let stack: number[] = [];
  let maxPair: number = -Infinity;
  
  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }

  while (stack.length > 1) {
    maxPair = Math.max(maxPair, stack.pop()! + stack.shift()!);
  }

  return maxPair;
};

function pairSum2(head: ListNode | null): number {
  let maxPair: number = -Infinity;
  let left: ListNode | null = null, right = head;

  while (head?.next) {
    head = head.next.next;
    const temp = right?.next || null;
    right!.next = left;
    left = right;
    right = temp;
  }
  
  while (right && left) {
    maxPair = Math.max(maxPair, left.val + right.val);
    right = right.next;
    left = left.next;
  }

  return maxPair;
};


const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(pairSum2(head)); // 9