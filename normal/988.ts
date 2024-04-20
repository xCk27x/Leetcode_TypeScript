class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function smallerLexiStr(str1: string, str2: string) {
  let maxLen = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLen; i++) {
    if (str1[i] === undefined) return str2;
    if (str2[i] === undefined) return str1;
    if (str1[i] > str2[i]) return str2;
    if (str1[i] < str2[i]) return str1;
  }

  return str1;
}

function smallestFromLeaf(root: TreeNode | null): string {
  if (root === null) return "";

  let leftStr = smallestFromLeaf(root.left);
  let rightStr = smallestFromLeaf(root.right);

  if (leftStr.length === rightStr.length) {
    return smallerLexiStr(leftStr, rightStr) + String.fromCharCode(root.val + 97);
  } else if (leftStr.length > rightStr.length) {
    smallerLexiStr(leftStr, rightStr + String.fromCharCode(root.val + 97)) + String.fromCharCode(root.val + 97);
  }

  return (
    smallerLexiStr() + String.fromCharCode(root.val + 97)
  );
}

console.log(
  smallestFromLeaf(
    new TreeNode(
      2,
      new TreeNode(
        2,
        null,
        new TreeNode(1, new TreeNode(0))
      ),
      new TreeNode(1, new TreeNode(0), null)
    )
  )
);
