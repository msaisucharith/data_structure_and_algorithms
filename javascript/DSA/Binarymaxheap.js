class Binarymaxheap {
  constructor() {
    this.values = [98, 30];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleheap();
  }

  bubbleheap() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let maxheap = new Binarymaxheap();
maxheap.insert(100);
console.log(maxheap.values);
