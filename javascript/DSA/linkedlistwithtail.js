class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      return "the likedlist is empty";
    } else {
      let prev = this.head;
      let list = "";
      while (prev) {
        list += `${prev.value} `;
        prev = prev.next;
      }
      return list;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removefromFront() {
    if (this.isEmpty()) {
      return "the list is empty";
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  removefromEnd() {
    if (this.isEmpty()) {
      return "the list is empty";
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }
}

const lists = new LinkedList();

lists.prepend(0);
lists.prepend(1);
lists.append(0.1);
lists.append(0.4);

lists.removefromFront();
lists.removefromEnd();

console.log(lists.isEmpty());
console.log(lists.size);
console.log(lists.print());
