type Node<T> = {
  value: T;
  next?: Node<T>;
};

// O(1)
// LinkedList implementation of Queue using Singly linked list
// FIFO - (First In First Out)
export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }
  dequeue() {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = undefined; // Queue is now empty
    }
    head.next = undefined;
    return head.value;
  }
  enqueue(item: T) {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  peek() {
    return this.head?.value;
  }
  isEmpty() {
    return this.length == 0;
  }
  size() {
    this.length;
  }
}

// Array implementation of Queue
class QueueSystem<TQue> {
  private items: TQue[] = [];

  enqueue(value: TQue) {
    this.items.push(value);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  dequeue() {
    if (this.isEmpty()) return -1;
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

const queue = new QueueSystem<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.peek(); // Output: 10
queue.dequeue(); // Output: 10
queue.size(); // Output: 2
