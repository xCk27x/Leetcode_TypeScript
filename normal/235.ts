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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  if (p === null) {
    if (q === null) return null;
    else {
      if (root.val === q.val) return root;
      else if (root.val > q.val) return lowestCommonAncestor(root.left, null, q);
      else return lowestCommonAncestor(root.right, null, q);
    }
  } else {
    if (q === null) {
      if (root.val === p.val) return root;
      else if (root.val > p.val) return lowestCommonAncestor(root.left, p, null);
      else return lowestCommonAncestor(root.right, p, null);
    } else {
      if (root.val === p.val || root.val === q.val) return root;
      else if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
      else if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
      else return root;
    }
  }
};

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let curNode = root;

  while (curNode) {
    if (p!.val > curNode.val && q!.val > curNode.val) {
      curNode = curNode.right;
    } else if (p!.val < curNode.val && q!.val < curNode.val) {
      curNode = curNode.left;
    } else {
      return curNode;
    }
  }

  return null;
}