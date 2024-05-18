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

function distributeCoins(root: TreeNode | null): number {
  let moves = 0;

  function childLackNum(root: TreeNode | null): number {
    if (root === null) return 0;

    const left = childLackNum(root.left);
    const right = childLackNum(root.right);
    moves += Math.abs(left) + Math.abs(right);

    return root.val + left + right - 1;
  }

  childLackNum(root);

  return moves;
};