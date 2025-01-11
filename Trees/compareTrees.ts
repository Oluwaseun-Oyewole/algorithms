type TreeNode<Q> = {
  value: Q;
  left?: TreeNode<Q> | null;
  right?: TreeNode<Q> | null;
};

// Depth preserves the shape of the transversal
export default function compare_binary_tree<T>(
  a: TreeNode<T>,
  b: TreeNode<T>
): boolean {
  if (a === null && b === null) return true; // structural check
  if (a === null || b === null) return false; // structural check
  if (a.value !== b.value) return false; //value check
  return (
    compare_binary_tree(a.left!, b.left!) &&
    compare_binary_tree(a.right!, b.right!)
  );
}
