const arr = [234, 12, 32, 4234, 2, 13, 12341];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= 1) {
    let mid = Math.round((start + end) / 2);

    if (arr[mid] === k) {
      return true;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(arr);

console.log(binarySearch(arr, 2));
