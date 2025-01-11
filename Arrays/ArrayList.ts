class ArrayList<A> {
  data: A[] = [];
  capacity: number;
  size: number = 0;

  constructor(initial_capacity: number = 0) {
    this.capacity = initial_capacity;
    this.data = new Array(initial_capacity);
    this.size = 0;
  }

  // O(1)
  add(element: A) {
    if (this.size === this.capacity) this.resize();
    this.data[this.size] = element;
    this.size++;
  }
  resize() {
    this.capacity += 2;
    let newArray: A[] = new Array(this.capacity);
    newArray = [...this.data];
    // for (let index = 0; index < this.size; index++) {
    //   newArray[index] = this.data[index];
    // }
    this.data = newArray;
  }

  // O(1)
  remove(index: number) {
    if (index < 0 || index >= this.size) return;

    const removedElement = this.data[index];
    for (let i = index; index < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size--;
    return removedElement;
  }

  // O(1)
  get(index: number) {
    if (index < 0 || index > this.size) return;
    return this.data[index];
  }

  print() {
    return this.data;
  }

  // Get the current size of the ArrayList
  length(): number {
    return this.size;
  }

  // Check if the ArrayList is empty
  isEmpty(): boolean {
    return this.size === 0;
  }
  clear(): void {
    this.data = new Array(this.capacity);
    this.size = 0;
  }
}

const list = new ArrayList();
list.add(10);
list.add(30);
list.add(40);
list.add(10);
list.add(10);
console.log(list.capacity);
console.log(list.size);
// console.log(list.remove(0));
console.log(list.print());
