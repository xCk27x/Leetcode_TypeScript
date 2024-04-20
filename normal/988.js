var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
function smallerLexiStr(str1, str2) {
    var maxLen = Math.max(str1.length, str2.length);
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === undefined)
            return str2;
        if (str2[i] === undefined)
            return str1;
        if (str1[i] > str2[i])
            return str2;
        if (str1[i] < str2[i])
            return str1;
    }
    return str1;
}
function smallestFromLeaf(root) {
    if (root === null)
        return "";
    return (smallerLexiStr(smallestFromLeaf(root.left), smallestFromLeaf(root.right)) + String.fromCharCode(root.val + 97));
}
console.log(smallestFromLeaf(new TreeNode(2, new TreeNode(2, null, new TreeNode(1, new TreeNode(0))), new TreeNode(1, new TreeNode(0), null))));
