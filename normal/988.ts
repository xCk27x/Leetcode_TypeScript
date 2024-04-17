class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function smallestFromLeaf(root: TreeNode | null): string {
  function dfs(node: TreeNode | null, path: string): string {
    if (!node) 
      return '{';
    
    const newPath = String.fromCharCode(node.val + 97) + path;
    if (!node.left && !node.right) 
      return newPath;

    const left = dfs(node.left, newPath);
    const right = dfs(node.right, newPath);
    return left < right ? left : right;
  }

  return dfs(root, '');
};