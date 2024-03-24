"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function deleteDuplicates(head) {
    let cPtr = head;
    while (cPtr !== null)
        if (cPtr.val === cPtr.next?.val)
            cPtr.next = cPtr.next.next;
        else
            cPtr = cPtr.next;
    return head;
}
;
