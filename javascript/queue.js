class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.next = null;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      let nnode = this.head.next;
      this.head = nnode;
    }

    this.size--;
  }

  printqueue() {
    if (!this.head) {
      return "the queue is empty";
    } else {
      let node = this.head;

      while (node) {
        console.log(node.value);
        node = node.next;
      }
    }
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

queue.printqueue();
