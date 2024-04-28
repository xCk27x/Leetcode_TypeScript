class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function longestZigZag(root: TreeNode | null): number {
  let max = 0;

  function helper(root: TreeNode | null, fromLeft: boolean, length: number): void {
    if (root === null) return;

    if (fromLeft) {
      helper(root.left, true, 1);
      helper(root.right, false, length + 1);
    } else {
      helper(root.left, true, length + 1);
      helper(root.right, false, 1);
    }
    max = Math.max(max, length);
  }
  helper(root!.left, true, 1);
  helper(root!.right, false, 1);
  
  return max;
}

function longestZigZag2(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, isLeftChild: boolean, path: number): number {
    if (!root) return path - 1;

    return Math.max(
      dfs(root.left, true, isLeftChild ? 1 : path + 1),
      dfs(root.right, false, isLeftChild ? path + 1 : 1)
    );
  }

  return Math.max(dfs(root!.left, true, 1), dfs(root!.right, false, 1));
}
