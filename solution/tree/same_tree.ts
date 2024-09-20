import TreeNode from "./tree_node";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (q === p) return true;

  if (q.val === p.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
}

// const a = new TreeNode(2);
// const b = a;

// console.log(a === b);

const a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const b = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(a, b));

const c = new TreeNode(1, new TreeNode(2));
const d = new TreeNode(1, new TreeNode(2));

console.log(isSameTree(c, d));

const e = new TreeNode(1, new TreeNode(3), new TreeNode(2));
const f = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(e, f));
