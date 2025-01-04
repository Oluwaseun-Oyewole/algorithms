type StackNode<N> = {
  value: N;
  prev?: StackNode<N>;
};

class Stack<T> {
  head?: StackNode<T>;
  length = 0;

  push(value: T) {
    const node = { value } as StackNode<T>;
    this.length++;
    if (!this.head) return (this.head = node);
    node.prev = this.head;
    this.head.prev = node;
  }
  pop() {
    if (this.length === 0) {
      const current = this.head;
      this.head = undefined;
      return current?.value;
    }

    this.length--;
    const head = this.head;
    this.head = this.head?.prev;
    return head?.value;
  }
}
