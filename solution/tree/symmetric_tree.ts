import TreeNode from "./tree_node";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  function name(left: TreeNode | null, right: TreeNode | null) {
    if (left === right) return true;

    return (
      left?.val === right?.val &&
      name(left.left, right.right) &&
      name(left.right, right.left)
    );
  }

  return name(root.left, root.right);
}

const a = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(a));
