function linear(arr, v) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return i;
    }
  }
  return -1;
}

let arr = [9, 4, 5, 6, 2, 1, 90, 234, 42];
let v = 90;
console.log(linear(arr, v));
