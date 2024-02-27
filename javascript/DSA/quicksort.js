function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapi = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapi = swapi + 1;

      let temp = arr[swapi];
      arr[swapi] = arr[i];
      arr[i] = temp;
    }
  }

  let temp = arr[start];
  arr[start] = arr[swapi];
  arr[swapi] = temp;

  return swapi;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let arr = [4, 9, 3, 2, 1, 5, 6, -2];
console.log(quickSort(arr));
