"use strict";
class SNodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const a = new SNodeClass(10);
const b = new SNodeClass(20);
const c = new SNodeClass(100);
a.next = b;
b.next = c;
function reverseLinkedList(head) {
    let current = head;
    let prev = null;
    do {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    } while (current !== null);
    return prev;
}
console.log(reverseLinkedList(a));
