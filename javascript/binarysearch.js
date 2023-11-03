const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const t = 19;

function BinarySearch(arr, t) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === t) {
      return `${mid} index`;
    } else {
      if (mid < t) {
        low = mid;
      } else {
        high = mid;
      }
    }

    return "the element is not presrnt in the array";
  }
}

console.log(BinarySearch(arr, t));
