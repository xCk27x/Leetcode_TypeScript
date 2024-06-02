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

function convertBST(root: TreeNode | null): TreeNode | null {

  function intoChild(node: TreeNode | null, num: number): number {
    if (node === null) return 0;
    node.val += num + intoChild(node.right, num);
    return node.val + intoChild(node.left, node.val) - num;
  }

  if (root === null) return null;
  root.val += intoChild(root.right, 0);
  intoChild(root.left, root.val);

  return root;
};

function convertBST2(root: TreeNode | null): TreeNode | null {
  let acc = 0;

  function infix(node: TreeNode | null) {
    if (node === null) return;
    infix(node.right);
    acc += node.val;
    node.val = acc;
    infix(node.left);
  }
  
  infix(root);
  return root;
}