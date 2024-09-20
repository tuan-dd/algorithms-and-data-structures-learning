import TreeNode from "./tree_node";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);
  return root;
}

const a = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

invertTree(a);

console.log(a.val, a.left.val, a.right.val);
