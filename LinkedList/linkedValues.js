"use strict";
class TNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const a = new TNode("A");
const b = new TNode("B");
const c = new TNode("C");
a.next = b;
b.next = c;
function linkedListsValues(head) {
    const values = [];
    let current = head;
    do {
        values.push(current.value);
        current = current.next;
    } while (current !== null);
    return values;
}
// recursive implementation
function recursiveBaseCase(head, values) {
    if (head === null)
        return;
    values.push(head.value);
    recursiveBaseCase(head.next, values);
}
function recursiveLinked(head) {
    const values = [];
    recursiveBaseCase(head, values);
    return values;
}
function findNodeIndex(head, index) {
    let current = head;
    let count = 0;
    do {
        if (count === index)
            return current.value;
        count++;
        current = current.next;
    } while (current !== null);
    return null;
}
