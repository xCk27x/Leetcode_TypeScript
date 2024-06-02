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

function findMode(root: TreeNode | null): number[] {
  let map = new Map<number, number>();
  
  (function infix(node: TreeNode | null) {
    if (node?.left) infix(node.left);
    map.set(node!.val, (map.get(node!.val) || 0) + 1);
    if (node?.right) infix(node.right);
  })(root);
  
  let maxAmount = 0; 
  let result: number[] = [];

  map.forEach((value, key) => {
    if (value > maxAmount) {
      result = [key];
      maxAmount = value;
    } else if (value === maxAmount) {
      result.push(key);
    }
  });

  return result;
};