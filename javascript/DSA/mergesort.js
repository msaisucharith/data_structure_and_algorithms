function merge(arr1, arr2) {
  let arr3 = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }

  return arr3;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

let arr = [10, 2, 3, 9, 8, 23, 1345];

console.log(mergesort(arr));
