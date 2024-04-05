
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k === 1) return head;

  let re = new ListNode(0, head);
  let nextAreaHead: ListNode = new ListNode(0, head); 
  let bottom: ListNode = new ListNode(0, head);
  let stack: ListNode[] = [];
  let isFirstArea = true;

  while (head !== null) {
    for (let i = 0; i < k - 1; i++) {
      if (head === null) 
        return re.next;
      stack.push(head);
      head = head.next;
    }

    if (head === null)                    // 排除當前head是null的情況
      return re.next;
    else                                  // 否則就將head.next放入stack
      nextAreaHead.next = head.next;

    if (isFirstArea) {
      re.next = head
      isFirstArea = false;
    } else
      bottom.next!.next = head;

    for (let i = 0; i < k - 1; i++) {     // 反轉當前區塊的指標
      head.next = stack.pop()!;
      head = head.next;
    }
    bottom.next = head;                   // 指向下一區塊的head
    head.next = nextAreaHead.next;
    head = head.next;
  }
  return re.next;
}

function reverseKGroup2(head: ListNode | null, k: number): ListNode | null {
  let stack: ListNode[] = [];
  let nextAreaHead: ListNode | null = new ListNode();
  let re = new ListNode(0, head);
  
  for (let i = 0; i < k - 1; i++) {
    if (head === null) {
      console.log('re: ', re.next);
      return re.next;
    }
    stack.push(head);
    head = head.next;
  } 
  if (head === null) return re.next;
  re.next = head;
  nextAreaHead = head.next;
  for (let i = 0; i < k - 1; i++) {
    head.next = stack.pop()!;
    head = head.next;
  }
  head.next = reverseKGroup2(nextAreaHead, k);
  return re.next;
}

let node = reverseKGroup2(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 1);

while (node !== null) {
  console.log(node.val);
  node = node.next;
}