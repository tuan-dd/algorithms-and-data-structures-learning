import TreeNode from "./tree_node";

function maxDepthDennis(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const left = maxDepthDennis(root.left);
  const right = maxDepthDennis(root.right);

  return 1 + (left > right ? left : right);
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
