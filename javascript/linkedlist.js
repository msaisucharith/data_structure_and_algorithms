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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // insert(value, index) {
  //   if (index < 0 || index > this.size) {
  //     return;
  //   }
  //   if (index === 0) {
  //     this.prepend(value);
  //   } else {
  //     const node = new Node(value);
  //     let prev = this.head;
  //     for (let i = 0; i < index - 1; i++) {
  //       prev = prev.next;
  //     }
  //     node.next = prev.next;
  //     prev.next = node;
  //     this.size++;
  //   }
  // }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
      this.size--;
    }
  }

  print() {
    if (this.isEmpty()) {
      return "this list is empty";
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

list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
list.insert(5, 4);
list.insert(6, 5);
list.insert(7, 6);

list.remove(1);

console.log(list.isEmpty());
console.log(list.getSize());

console.log(list.print());

console.log(list.print());
