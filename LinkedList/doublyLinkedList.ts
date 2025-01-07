type TNode<N> = {
  value: N;
  next?: TNode<N>;
  prev?: TNode<N>;
};
export class DoublyLinkedList<D> {
  head?: TNode<D> = undefined;
  tail?: TNode<D>;
  length: number = 0;

  constructor() {
    this.head = this.tail = undefined;
  }

  prepend(value: D) {
    this.length++;
    const node = { value } as TNode<D>;
    if (!this.head) return (this.head = this.tail = node);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  append(item: D) {
    const node = { value: item } as TNode<D>;
    this.length++;
    if (!this.tail) this.head = this.tail = node;

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item: D, index: number) {
    if (index > this.length) return;
    if (index === this.length) this.append(item);
    else if (index === 0) this.prepend(item);
    this.length++;
    let current = this.getAt(index);
    current = current as TNode<D>;
    const node = { value: item } as TNode<D>;

    node.next = current;
    node.prev = current?.prev;
    current.prev = node;

    if (node.prev) {
      node.prev.next = current;
    }
  }

  remove(item: D) {
    let current = this.head;
    for (let i = 0; current && i < this.length; i++) {
      if (current.value === item) break;
      current = current as TNode<D>;
    }
    if (!current) return;
    return this.removeNode(current);
  }

  get(idx: number) {
    return this.getAt(idx)?.value;
  }

  private removeNode(node: TNode<D>) {
    this.length--;
    if (this.length === 0) {
      const out = this.head;
      this.head = this.tail = undefined;
      return out?.value;
    }
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;
    return node.value;
  }

  getAt(index: number): TNode<D> {
    let current = this.head;
    for (let i = 0; current && i < index; i++) {
      current = current.next;
    }
    return current!;
  }

  removeAt(index: number) {
    const node = this.getAt(index);
    if (!node) return undefined;
    return this.removeNode(node);
  }
}
