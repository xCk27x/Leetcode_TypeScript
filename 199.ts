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

function rightSideView(root: TreeNode | null, level: number = 0, rightView: number[] = []): number[] {
  if (root === null) return rightView;
  
  if (rightView.length <= level) {
    rightView.push(root.val);
  } else {
    rightView[level] = root.val;
  }

  return rightSideView(root.right, level + 1, rightSideView(root.left, level + 1, rightView));
}