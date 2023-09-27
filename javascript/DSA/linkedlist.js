class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return "this list is full";
    } else {
      let value = "";
      let current = this.head;
      while (current) {
        value += `${current.value} `;
        current = current.next;
      }
      return value;
    }
  }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);

console.log(list.isEmpty());
console.log(list.getSize());

console.log(list.print());
