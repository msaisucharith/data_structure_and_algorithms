class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newnode = new Node(value);

    if (this.root === null) {
      this.root = newnode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newnode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newnode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return undefined;

    let temp = this.root;
    let found = false;

    while (temp && !found) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BST() {
    if (this.root === null) return "empty";

    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  min() {
    let current = this.root;

    while (!current.left) {
      current = current.left;
    }

    return current.left.value;
  }

  BST1() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      let value = queue.shift();
      data.push(value.value);

      if (value.left) {
        queue.push(value.left);
      }
      if (value.right !== null) {
        queue.push(value.right);
      }
    }

    return data;
  }

  DFSPreorder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }

  DFSPostorder() {
    var data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}

let bt = new BinaryTree();

bt.insert(32);
bt.insert(10);
bt.insert(1);
bt.insert(3);
bt.insert(2);
bt.insert(13);

console.log(bt.DFSPostorder());
console.log(bt.DFSPreorder());
console.log(bt.contains(31));
console.log(bt.BST());
console.log(bt.BST1());
