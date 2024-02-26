// function quicksort(arr, start = 0, end = arr.length + 1) {
//   let pivot = arr[start];
//   let swapIn = start;

//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIn = swapIn + 1;
//       var temp = arr[swapIn];
//       arr[swapIn] = arr[i];
//       arr[i] = temp;
//       console.log(arr);
//     }
//   }

//   var temp = arr[start];
//   arr[start] = arr[swapIn];
//   arr[swapIn] = temp;

//   return arr;
// }

// let arr = [4, 8, 2, 1, 5, 7, 6, 3];
// console.log(quicksort(arr));

function quicksort(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapi = start;

  for (let i = 0; i < arr.length; i++) {
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

  return arr;
}

let arr = [4, 9, 8, 7, 6, 3, 2, 1];

console.log(quicksort(arr));
