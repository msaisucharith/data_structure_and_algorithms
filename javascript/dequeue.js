// in this dqueue method we will use object for reduce complexity

class Dqueue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  push(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  pop() {
    const ele = this.item[this.front];
    delete this.item[this.front];
    this.front++;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    return this.item;
  }
}

const dqueue = new Dqueue();

console.log(dqueue.isEmpty());

dqueue.push(10);
dqueue.push(20);
dqueue.push(30);

dqueue.pop();

console.log(dqueue.size());

console.log(dqueue.print());
