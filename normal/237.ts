class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
Do not return anything, modify it in-place instead.
*/
function deleteNode(node: ListNode | null): void {
  if (node === null || node.next === null)
    return;
  
  node.val = node.next.val;
  
  if (node.next.next !== null)
    node.next = node.next.next;
  else
    node.next = null;
};