"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// O(1)
// LinkedList implementation of Queue using Singly linked list
// FIFO - (First In First Out)
class Queue {
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    enqueue(item) {
        this.length++;
        const node = { value: item };
        if (!this.tail)
            return (this.head = this.tail = node);
        this.tail = node;
        this.tail.next = node;
    }
    dequeue() {
        if (!this.head)
            return undefined;
        this.length--;
        const current = this.head;
        this.head = this.head.next;
        current.next = undefined;
        return current.value;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.length == 0;
    }
    size() {
        this.length;
    }
}
exports.default = Queue;
// Array implementation of Queue
class QueueSystem {
    constructor() {
        this.items = [];
    }
    enqueue(value) {
        this.items.push(value);
    }
    isEmpty() {
        return this.items.length === 0;
    }
    dequeue() {
        if (this.isEmpty())
            return -1;
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
}
const queue = new QueueSystem();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.peek(); // Output: 10
queue.dequeue(); // Output: 10
queue.size(); // Output: 2
