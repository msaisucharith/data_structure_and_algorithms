class Hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hashkey = 0;
    for (let i = 0; i < key.length; i++) {
      hashkey = hashkey + key.charCodeAt(i);
    }
    return hashkey % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashtable = new Hashtable(50);

hashtable.set("sai", 100);
hashtable.set("harsha", 234);
hashtable.set("sai", 1234);
hashtable.print();
