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


function pathSum(root: TreeNode | null, targetSum: number, preNodes: number[] = []): number {
  if (root === null) return 0;
  
  let count = root.val;
  let re = count === targetSum ? 1 : 0;

  for (let i = preNodes.length - 1; i >= 0; i--) {
    count += preNodes[i];
    if (count === targetSum) {
      re++;
    }
  }

  preNodes.push(root.val);
  return (
    pathSum(root.left, targetSum, preNodes) + 
    pathSum(root.right, targetSum, preNodes) + 
    re
  )
};

