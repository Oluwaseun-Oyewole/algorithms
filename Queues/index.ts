type QNode<QN> = {
  value: QN;
  next?: QNode<QN>;
};

// O(1)
// LinkedList implementation of Queue using Singly linked list
// FIFO - (First In First Out)
export default class Queue<QL> {
  head?: QNode<QL>;
  tail?: QNode<QL>;
  length: number = 0;

  constructor() {
    this.head = this.tail = undefined;
  }

  enqueue(item: QL) {
    this.length++;
    const node = { value: item } as QNode<QL>;
    if (!this.tail) return (this.head = this.tail = node);
    this.tail = node;
    this.tail.next = node;
  }
  dequeue() {
    if (!this.head) return undefined;
    this.length--;

    const current = this.head;
    this.head = this.head.next;

    current.next = undefined;
    return current.value;
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
