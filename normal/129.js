var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function sumNumbers(root) {
    if (!root)
        return 0;
    var nodeStack = [root];
    var valStack = [root ? root.val : 0];
    var count = 0;
    while (nodeStack.length) {
        var tempNode = nodeStack.shift();
        if (!tempNode.left && !tempNode.right) {
            count += tempNode.val;
        }
        else {
            if (tempNode.left) {
                tempNode.left.val += tempNode.val * 10;
                nodeStack.push(tempNode.left);
            }
            if (tempNode.right) {
                tempNode.right.val += tempNode.val * 10;
                nodeStack.push(tempNode.right);
            }
        }
    }
    return count;
}
;
console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 25
