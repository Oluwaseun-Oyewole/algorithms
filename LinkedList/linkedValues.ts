class TNode<T> {
  value: T;
  next?: TNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const a = new TNode("A");
const b = new TNode("B");
const c = new TNode("C");
a.next = b;
b.next = c;

function linkedListsValues<L>(head: TNode<L>) {
  const values: L[] = [];
  let current = head;
  do {
    values.push(current.value!);
    current = current.next!;
  } while (current !== null);
  return values;
}

// recursive implementation
function recursiveBaseCase<R>(head: TNode<R>, values: R[]) {
  if (head === null) return;
  values.push(head.value);
  recursiveBaseCase(head.next!, values);
}
function recursiveLinked<R>(head: TNode<R>) {
  const values = [];
  recursiveBaseCase(head, values);
  return values;
}

function findNodeIndex<N>(head: SNodeClass<N>, index: N) {
  let current = head;
  let count = 0;
  do {
    if (count === index) return current.value;
    count++;
    current = current.next!;
  } while (current !== null);
  return null;
}
