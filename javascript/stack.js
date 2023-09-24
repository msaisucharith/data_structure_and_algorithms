// stack follows first-in-last-out principle (FIFO)

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }
}

const stack = new Stack();

stack.push(1);

stack.push(2);

stack.push(3);

stack.pop();

console.log(stack.peek());

console.log(stack.print());
