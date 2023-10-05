// binary search

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round((start + end) / 2);

    if (arr[mid] === k) {
      return true;
    } else if (mid < k) {
      start = mid - 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(arr, 11));
