type Node<T> = {
  value: T;
  prev: Node<T>;
};

// LIFO, Dynamic implementation
export default class Stack<T> {
  public length: number = 0;
  public head?: Node<T>;
  size: number = 2;

  push(item: T) {
    const node = { value: item } as Node<T>;
    if (!this.head) return (this.head = node);

    this.head = node;
    node.prev = this.head;
  }

  pop() {
    this.length = Math.max(0, this.length - 1);
    if (!this.head || this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    this.length--;
    const head = this.head;
    this.head = this.head?.prev;
    return head?.value;
  }

  peak() {
    return this.head?.value;
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.length === this.size;
  }
}
