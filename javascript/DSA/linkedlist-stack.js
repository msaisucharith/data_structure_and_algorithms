import LinkedList from "./linkedlistwithtail";

class linkedliststack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    this.list.removefromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isFull() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size;
  }

  print() {
    return this.list.print();
  }
}

const list = new linkedliststack();

list.push(1);
list.push(2);
list.push(3);

// list.pop();

console.log(list.peek());
console.log(list.size());
console.log(list.print());
