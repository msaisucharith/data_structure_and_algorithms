// queue will be first-in-first-out(fifo)
// -----> or <-

class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.unshift(element);
  }

  pop() {
    this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  print() {
    return this.items.toString();
  }
}

// instance of a queue

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

queue.pop();

console.log(queue.peek());

console.log(queue.size());

console.log(queue.print());
