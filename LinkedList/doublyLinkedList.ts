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
    if (!this.head) return (this.head = node);
    this.head = node;
    this.head.next = node;
    this.head.prev = node;
  }
}
