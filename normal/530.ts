/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  let minDiff = Infinity; 
  let last: number | undefined = undefined;
  
  function infix(node: TreeNode | null) {
    if (node?.left) infix(node.left);
    
    if (last !== undefined) {
      minDiff = Math.min(minDiff, Math.abs(node!.val - last));
    }
    last = node?.val;

    if (node?.right) infix(node.right);
  }

  infix(root);

  return minDiff;
};