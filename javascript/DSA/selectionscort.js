function seclectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let temps = arr[i];
    arr[i] = arr[min];
    arr[min] = temps;
  }

  return arr;
}

let arr = [9, 7, 8, 5, 6, 3, 4, 2, 1, 0];

console.log(seclectionsort(arr));
