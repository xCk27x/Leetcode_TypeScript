/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function doubleIt(head: ListNode | null): ListNode | null {
  
  function helper(node: ListNode | null): number {
    if (node === null) return 0;
    let sum = node.val * 2 + helper(node.next);
    node.val = sum % 10;
    return Math.floor(sum / 10);
  }

  let newHead = new ListNode(0, head);
  helper(newHead);

  return newHead.val === 0 ? newHead.next : newHead;
};