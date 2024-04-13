var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function pairSum(head) {
    var stack = [];
    var maxPair = -Infinity;
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    while (stack.length > 1) {
        maxPair = Math.max(maxPair, stack.pop() + stack.shift());
    }
    return maxPair;
}
;
function pairSum2(head) {
    var maxPair = -Infinity;
    var left = null, right = head;
    while (head === null || head === void 0 ? void 0 : head.next) {
        head = head.next.next;
        var temp = (right === null || right === void 0 ? void 0 : right.next) || null;
        right.next = left;
        left = right;
        right = temp;
    }
    console.log(left, right === null || right === void 0 ? void 0 : right.val);
    while (right && left) {
        maxPair = Math.max(maxPair, left.val + right.val);
        right = right.next;
        left = left.next;
    }
    return maxPair;
}
;
var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(pairSum2(head)); // 9
