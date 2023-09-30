class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublelinkedlist {
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

  removefromfront() {
    if (this.isEmpty()) {
      return "the list is empty";
    } else {
      this.head = this.head.next;
      this.size--;
    }
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

  remonefromlast() {
    if (this.isEmpty()) {
      return "the list is empty";
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let pointer = this.head;

      while (pointer.next != this.tail) {
        pointer = pointer.next;
      }
      pointer.next = null;
      this.tail = pointer;
      this.size--;
    }
  }

  print() {
    if (this.isEmpty()) {
      return "the list is empty";
    } else {
      let temp = this.head;
      let str = "";

      while (temp) {
        str += `${temp.value} `;
        temp = temp.next;
      }

      return str;
    }
  }
}

const doublelist = new doublelinkedlist();

doublelist.prepend(1);
doublelist.prepend(2);
doublelist.prepend(3);
doublelist.prepend(4);
doublelist.prepend(5);
doublelist.append(0);
doublelist.append(0.1);
doublelist.append(0.2);
doublelist.append(0.3);

doublelist.removefromfront();

doublelist.remonefromlast();
doublelist.remonefromlast();
doublelist.remonefromlast();

console.log(doublelist.size);
console.log(doublelist.isEmpty());

console.log(doublelist.print());
