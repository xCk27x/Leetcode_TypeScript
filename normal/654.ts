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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  let index = 0, max = -Infinity;
  nums.forEach((n, i) => {
    if (n > max) {
      max = n;
      index = i;
    }
  });

  return new TreeNode(
    max,
    constructMaximumBinaryTree(nums.slice(0, index)),
    constructMaximumBinaryTree(nums.slice(index + 1))
  )
};