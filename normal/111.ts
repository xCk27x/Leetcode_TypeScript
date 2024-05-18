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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  
  let left = minDepth(root.left);
  if (left === 1) return 2; // 這行
  let right = minDepth(root.right);
  if (right === 1) return 2; // 跟這行
  // 讓time beats 100%, 超好笑

  if (left === 0 || right === 0) 
    return left + right + 1;
  else 
    return Math.min(left, right) + 1;
};