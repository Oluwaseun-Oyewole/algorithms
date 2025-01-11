type BinaryNode<T> = {
  value: number;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk<T>(curr: BinaryNode<T> | null, path: number[]) {
  if (!curr) return path;

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  return path;
}

export default function binary_tree_in_order_search(head: BinaryNode<number>) {
  return walk(head, []);
}

console.log(
  "testing in order system",
  binary_tree_in_order_search({
    value: 10,
    left: {
      value: 20,
      left: null,
      right: {
        value: 30,
        left: null,
        right: { value: 50, left: null, right: null },
      },
    },
    right: {
      value: 40,
      left: { value: 80, left: null, right: null },
      right: null,
    },
  })
);
