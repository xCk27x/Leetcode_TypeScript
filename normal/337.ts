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

function rob(root: TreeNode | null): number {
  if (root === null) return 0;

  function dfs(node: TreeNode | null): [number, number] {
    if (node === null) return [0, 0];

    const [leftRob, leftNotRob] = dfs(node.left);
    const [rightRob, rightNotRob] = dfs(node.right);

    const tempVal = Math.max(
      leftRob + rightRob, 
      leftNotRob + rightNotRob + node.val
    );

    return [tempVal, leftRob + rightRob];
  }

  const [robRoot, notRobRoot] = dfs(root);
  return Math.max(robRoot, notRobRoot);
};