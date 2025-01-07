class AsyncRequestQueue {
  isProcessingRequest = false;
  queue: (() => Promise<void>)[] = [];

  add(request: () => Promise<void>) {
    this.queue.push(request);
    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessingRequest) return;

    this.isProcessingRequest = true;
    while (this.queue.length > 0) {
      const getCurrentRequest = this.queue.shift();
      if (getCurrentRequest) {
        try {
          await getCurrentRequest();
        } catch (error) {
          throw new Error(error as string);
        }
      }
    }
    this.isProcessingRequest = false;
  }

  print() {
    return this.queue;
  }
}

type LinkedListQueueNode<L> = {
  value: () => Promise<void>;
  next?: LinkedListQueueNode<L>;
};

class AsyncListQueue<L> {
  head?: LinkedListQueueNode<L>;
  tail?: LinkedListQueueNode<L>;
  length = 0;
  isProcessing = false;

  constructor() {
    this.head = this.tail = undefined;
  }

  enqueue(request: () => Promise<void>) {
    const node = { value: request } as LinkedListQueueNode<L>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      this.tail = node;
      this.tail.next = node;
    }
    this.processQueue();
  }
  size() {
    return this.length;
  }
  async processQueue() {
    if (this.isProcessing) return;

    this.isProcessing = true;
    while (this.head) {
      const currentRequest = this.head?.value;
      this.head = this.head?.next;

      try {
        await currentRequest();
      } catch (error) {
        console.error("Error processing request:", error);
      }
    }
    this.tail = undefined;
    this.isProcessing = false;
  }
}

const queue = new AsyncListQueue();

queue.enqueue(async () => {
  console.log("Request 1 started");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  console.log("Request 1 completed");
});

queue.enqueue(async () => {
  console.log("Request 2 started");
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Request 2 completed");
});

console.log(queue);
