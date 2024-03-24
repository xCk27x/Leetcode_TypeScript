
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cPtr = head;
  while (cPtr !== null)
    if (cPtr.val === cPtr.next?.val)
      cPtr.next = cPtr.next.next;
    else 
      cPtr = cPtr.next;
  return head
};