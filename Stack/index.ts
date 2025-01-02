type Node<T> = {
  value: T;
  prev: Node<T>;
};

// LIFO
export default class Stack<T> {
  public length: number = 0;
  public head?: Node<T>;

  push(item: T) {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
    }
    node.prev = this.head;
    this.head.prev = node;
  }

  pop() {
    this.length = Math.max(0, this.length - 1);
    if (!this.head || this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    const head = this.head;
    this.head = this.head.prev;
    return head?.value;
  }

  peak() {
    return this.head?.value;
  }
}
