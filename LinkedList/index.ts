class SNodeClass<SN> {
  value: SN;
  next?: SNodeClass<SN> | null;

  constructor(value: SN) {
    this.value = value;
    this.next = null;
  }
}

const a = new SNodeClass(10);
const b = new SNodeClass(20);
const c = new SNodeClass(100);
a.next = b;
b.next = c;

function reverseLinkedList<R>(head: SNodeClass<R>) {
  let current: SNodeClass<R> = head;
  let prev: SNodeClass<R> | null = null;
  do {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next!;
  } while (current !== null);
  return prev;
}
console.log(reverseLinkedList(a));
