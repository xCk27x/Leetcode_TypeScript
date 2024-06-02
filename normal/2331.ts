class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false;
  
  switch (root.val) {
    case 3:
      return evaluateTree(root.left) || 
             evaluateTree(root.right);
    case 2:
      return evaluateTree(root.left) && 
             evaluateTree(root.right);
    case 1:
      return true;
    default:
      return false;
  }
}
