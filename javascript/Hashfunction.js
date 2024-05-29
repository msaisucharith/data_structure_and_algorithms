// function hash(Str, length) {
//   let total = 0;

//   for (let key of Str) {
//     let char = key.charCodeAt(key) - 96;
//     total = total + char;
//   }
//   console.log(total);
// }

// hash("Apple", 10);

// collision in hashing
// 1.seperate chaining
// we will store the two data or more in one index

// 2.linear probing
// in linear probing we find the collision, and find the empty index

class HashTable {
  constructor(size = 6) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;

    let WERID_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WERID_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    console.log(index);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }

    return undefined;
  }
}

let ht = new HashTable();
ht.set("French", "Fries");
ht.set("a", "a");
ht.set("a", "a");
console.log(ht.keyMap);
console.log(ht.get("a"));
