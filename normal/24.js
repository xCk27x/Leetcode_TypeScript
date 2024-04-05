class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function swapPairs(head) {
    if (!head || !head.next)
        return head;
    let k = new ListNode(0, head.next), c = new ListNode(0, head.next), t = new ListNode(0, head);
    while (head !== null && head.next !== null) {
        head.next = head.next.next;
        c.next.next = head;
        head = head.next;
        c.next = head?.next === undefined ? null : head.next;
        t.next.next = c.next === null ? head : c.next;
        t.next = head;
        // console.log(head?.val);
        // while (k.next !== null) {
        //   console.log(k.next.val);
        //   k.next = k.next.next;
        // }
    }
    return k.next;
}
;
console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));
