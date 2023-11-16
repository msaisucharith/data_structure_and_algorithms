let arr = [4, 2, 9, 8, 5, 6, 1, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
}
insertionSort(arr);

console.log(arr);
