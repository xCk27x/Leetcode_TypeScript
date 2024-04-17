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


function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) 
    return new TreeNode(val, root, null);
  
  const queue: TreeNode[][] = [[root!]];
  let level = 1;

  while (queue.length) {
    let curLevel = queue.shift()!;
    let nextLevel: TreeNode[] = [];
    for (let node of curLevel) {
      if (level === depth - 1) {
        let newLeftNode = new TreeNode(val, node.left, null);
        let newRightNode = new TreeNode(val, null, node.right);
        [node.left, node.right] = [newLeftNode, newRightNode];
      } else {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
    }
    if (level === depth - 1)
      break;
    queue.push(nextLevel);
    level++;
  }
  return root;
};

function addOneRow2(root: TreeNode | null, val: number,    depth: number): TreeNode | null {
  if (root === null) 
    return null;
  if (depth === 1) 
    return new TreeNode(val, root, null);

  if (depth === 2) {
    let newLeftNode = new TreeNode(val, root.left, null);
    let newRightNode = new TreeNode(val, null, root.right);
    [root.left, root.right] = [newLeftNode, newRightNode];
  } else {
    root.left = addOneRow2(root.left, val, depth - 1);
    root.right = addOneRow2(root.right, val, depth - 1);
  }
  return root;
}

// console.log(addOneRow2(new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), new TreeNode(6, new TreeNode(5))), 1, 2)); // [4, 1, 1, 2, null, null, 6, 3, 1, 5]