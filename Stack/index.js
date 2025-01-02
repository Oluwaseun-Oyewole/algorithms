"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// LIFO
class Stack {
    constructor() {
        this.length = 0;
    }
    push(item) {
        const node = { value: item };
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
            return head === null || head === void 0 ? void 0 : head.value;
        }
        const head = this.head;
        this.head = this.head.prev;
        return head === null || head === void 0 ? void 0 : head.value;
    }
    peak() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
}
exports.default = Stack;
