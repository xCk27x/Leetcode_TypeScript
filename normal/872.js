class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function findLeaf(root) {
    if (root === null)
        return [];
    else if (root.left === null && root.right === null)
        return [root.val];
    else
        return findLeaf(root.left).concat(findLeaf(root.right));
}
function leafSimilar(root1, root2) {
    return findLeaf(root1).toString() === findLeaf(root2).toString();
}
;
