type BinaryNode<T> = {
  value: number;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk<T>(current: BinaryNode<T> | null, path: number[]) {
  if (!current) return path;

  //pre
  path.push(current.value);
  //recurse
  walk(current.left, path);
  walk(current.right, path);
  //post
  return path;
}
export default function binary_tree_pre_order_search(head: BinaryNode<number>) {
  return walk(head, []);
}

console.log(
  "testing pre order system",
  binary_tree_pre_order_search({
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
