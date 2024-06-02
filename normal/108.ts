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

function sortedArrayToBST(nums: number[], low: number = 0, high: number = nums.length): TreeNode | null {
  if (low >= high) return null;

  const i = low + Math.floor((high - low) / 2);

  return new TreeNode(
    nums[i], 
    sortedArrayToBST(nums, low, i), 
    sortedArrayToBST(nums,i + 1, high)
  );
};