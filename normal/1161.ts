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

function maxLevelSum(root: TreeNode | null): number {
  let queue: TreeNode[] = [root!], tempQueue: TreeNode[] = [];
  let maxSum = -Infinity, layer = 1, result = 1;

  while (1) {
    let sum = 0;
    while (queue.length > 0) {
      let tempNode = queue.pop();
      sum += tempNode!.val;
      if (tempNode!.left) tempQueue.push(tempNode!.left);
      if (tempNode!.right) tempQueue.push(tempNode!.right);
    }
    if (sum > maxSum) {
      maxSum = sum;
      result = layer;
    }
    maxSum = Math.max(maxSum, sum);
    if (tempQueue.length === 0) break;
    queue = tempQueue;
    tempQueue = [];
    layer++;
    sum = 0;
  }

  return result;
}
