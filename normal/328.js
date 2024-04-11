var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function oddEvenList(head) {
    if (head === null)
        return null;
    var evenHead = new ListNode(0, head);
    var oddHead = new ListNode(0, head.next);
    while (head === null || head === void 0 ? void 0 : head.next) {
        var temp = head.next;
        console.log(temp);
        head.next = head.next.next;
        if (head.next !== null) {
            head = head.next;
            temp.next = temp.next.next;
        }
    }
    head.next = oddHead.next;
    return evenHead.next;
}
;
console.log(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))))); // 1 -> 3 -> 5 -> 2 -> 4
