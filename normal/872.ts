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

function findLeaf(root: TreeNode | null) : number[] {
  if (root === null) 
    return [];
  else if (root.left === null && root.right === null) 
    return [root.val];
  else 
    return findLeaf(root.left).concat(findLeaf(root.right));
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  return findLeaf(root1).toString() === findLeaf(root2).toString();
};