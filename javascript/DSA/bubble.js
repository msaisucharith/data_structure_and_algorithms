// function numbercompare(num1, num2) {
//   return num1 - num2;
// }

// let arr = [9, 8, 3, 2, 1, 0];

// console.log(arr.sort(numbercompare));
// console.log(arr.sort());

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
}

let arr = [0, 9, 2, 3, 8, 6, 5];
bubblesort(arr);
