class CircularQueue {
  constructor(capacity) {
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.currentlength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.capacity === this.currentlength;
  }

  isEmpty() {
    return this.currentlength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.item[this.rear] = element;
      this.currentlength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.item[this.front];
    this.item[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentlength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.item[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("the string is empty");
    } else {
      let i;
      let s = "";
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        s = s + this.item[i] + "";
      }
      s = s + this.item[i];
      return s;
    }
  }
}

const circularqueue = new CircularQueue(5);

console.log(circularqueue.isEmpty());

circularqueue.enqueue(1);
circularqueue.enqueue(2);
circularqueue.enqueue(3);
circularqueue.enqueue(4);
circularqueue.enqueue(5);

console.log(circularqueue.dequeue());

circularqueue.enqueue(6);

console.log(circularqueue.print());
