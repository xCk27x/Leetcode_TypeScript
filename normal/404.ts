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

function sumOfLeftLeaves(root: TreeNode | null, isLeft: boolean = false): number {
  if (root === null) return 0;
  
  if (root.left === null && root.right === null)
    return isLeft ? root.val : 0;

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
}
