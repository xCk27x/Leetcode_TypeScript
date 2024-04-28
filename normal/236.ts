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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
	if (root === null) return null;
  
  const leftHasPQ = lowestCommonAncestor(root.left, p, q);
  const rightHasPQ = lowestCommonAncestor(root.right, p, q);

  if (leftHasPQ && rightHasPQ)
    return root;

  if ((root.val === p.val || root.val === q.val)) 
    return root;

  return leftHasPQ || rightHasPQ;
};