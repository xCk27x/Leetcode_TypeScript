class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function goodNodes(root: TreeNode | null, num: number = Number.MIN_SAFE_INTEGER): number {
  if (root === null) return 0;

  if (root.val >= num) 
    return goodNodes(root.left, root.val) + goodNodes(root.right, root.val) + 1;
  else
    return goodNodes(root.left, num) + goodNodes(root.right, num);
}