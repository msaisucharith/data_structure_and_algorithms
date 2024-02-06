function sumofp(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return "the pair is there";
    } else if (right > 0) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }

  return "there no sum pair";
}

let arr = [-3, -1, 0, 1, 2, 3, 4, 5];

console.log(sumofp(arr));
