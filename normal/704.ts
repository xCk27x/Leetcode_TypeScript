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

function isSymmetric(root: TreeNode | null): boolean {

  function isMirror(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;

    if (n1.val === n2.val) {
      return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    }

    return false;
  }

  return isMirror(root, root);
};