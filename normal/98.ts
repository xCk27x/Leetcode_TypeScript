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

function isValidBST(root: TreeNode | null, high: number = Infinity, low: number = -Infinity): boolean {
  
  if (root === null) 
    return true;
  
  if (root.val >= high || root.val <= low) 
    return false;

  return (
    isValidBST(root.left, root.val, low) &&
    isValidBST(root.right, high, root.val)
  )
};