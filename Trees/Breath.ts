type QueueNode<Q> = {
  value: Q;
  left?: QueueNode<Q> | null;
  right?: QueueNode<Q> | null;
};

export default function breadFirstSearch<B>(head: QueueNode<B>, needle: B) {
  const queue: QueueNode<B>[] = [head];
  while (queue.length) {
    const current = queue.shift();
    if (!current) continue;
    if (current.value === needle) return true;
    queue.push(current.left!);
    queue.push(current.right!);
  }
  return false;
}

console.log(
  "testing pre order system",
  breadFirstSearch(
    {
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
    },
    200
  )
);
