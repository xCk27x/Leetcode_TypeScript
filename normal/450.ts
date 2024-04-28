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

function leftMin(nodeLeft: TreeNode | null): number | null {
  if (nodeLeft === null) return null;
  while (nodeLeft.right !== null)
    nodeLeft = nodeLeft.right;
  return nodeLeft.val;
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null;

  if (key > root.val) 
    root.right = deleteNode(root.right, key);
  else if (key < root.val) 
    root.left = deleteNode(root.left, key);
  else {
    let minFromLeft = leftMin(root.left);
    if (minFromLeft === null) 
      return root.right;
    else {
      root.val = minFromLeft;
      root.left = deleteNode(root.left, minFromLeft);
    }
  }

  return root;
};