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

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;

  let nodeStack: TreeNode[] = [root];
  let sum = 0;
  
  while (nodeStack.length) {
    let tempNode = nodeStack.shift()!;

    if (!tempNode.left && !tempNode.right) {
      sum += tempNode.val;
    } else {
      if (tempNode.left) {
        tempNode.left.val += tempNode.val * 10;
        nodeStack.push(tempNode.left);
      }
      if (tempNode.right) {
        tempNode.right.val += tempNode.val * 10;
        nodeStack.push(tempNode.right);
      }
    }
  }
  return sum;
};

console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 25