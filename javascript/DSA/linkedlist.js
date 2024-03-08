class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      console.log("the list is empty");
    } else {
      let current = this.head;
      let newtemp = current;

      while (current.next.next) {
        newtemp = current;
        current = current.next;
      }
      console.log(current.val);
      current.next = null;
      this.tail = current;
      this.length--;
    }
  }

  shift() {
    if (!this.head) {
      console.log("empty list");
    } else {
      this.head = this.head.next;
      this.length--;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  getvalue(index) {
    let currentIndex = 0;

    if (index <= 0 || index >= this.index) {
      console.log("the index is wrong");
    } else {
      let temp = this.head;
      while (currentIndex < index) {
        temp = temp.next;
        currentIndex++;
      }

      console.log(temp.val);
    }
  }

  setvalue(index, value) {
    let counterindex = 0;

    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let temp = this.head;
      while (counterindex < index) {
        temp = temp.next;
        counterindex++;
      }
      console.log(temp.val);
      temp.next.val = value;
      console.log(temp.val);
    }
  }

  insert(index, value) {
    let newNode = new Node(value);

    let current = this.head;
    let temp = current;

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      for (let i = 0; i < index; i++) {
        temp = current;
        current = current.next;
      }
    }
  }

  displayList() {
    let temp = this.head;

    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

let llist = new LinkedList();
llist.push(3);
llist.push(4);
llist.push(5);
llist.push(53);
console.log(llist.push(6));
llist.pop();

llist.shift();
llist.unshift(23);
llist.unshift(234);

llist.getvalue(3);
llist.setvalue(2, 2000);

llist.insert(1234, 0);

llist.displayList();
