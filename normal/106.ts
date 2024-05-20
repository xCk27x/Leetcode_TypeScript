function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let len = inorder.length;
  
  if (!len) return null;

  const rootVal = postorder[len - 1];
  const i = inorder.indexOf(rootVal);
  return new TreeNode(
    rootVal, 
    buildTree(inorder.slice(0, i), postorder.slice(0, i)), 
    buildTree(inorder.slice(i + 1), postorder.slice(i, len - 1))
  );
};