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

function findBottomLeftValue(root: TreeNode | null): number {
    
  function dfs(root: TreeNode | null): [number, number] {
    if (root === null) return [NaN, 0];
    
    const [leftVal, leftLevel] = dfs(root.left);
    const [rightVal, rightLevel] = dfs(root.right);

    if (isNaN(leftVal) && isNaN(rightVal)) 
      return [root.val, 1];

    if (leftLevel < rightLevel) 
      return [rightVal, rightLevel + 1];

    return [leftVal, leftLevel + 1];
  }

  return dfs(root)[0];
};