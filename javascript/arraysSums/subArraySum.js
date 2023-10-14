const t = 10;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function subArraysum(arr, t) {
  let arrt = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let tar = arr[i] + arr[j];
      if (tar === t) {
        let storedV = [arr[i], arr[j]];
        arrt.push(storedV);
      }
    }
  }
  return arrt;
}

// here it will return the sub array of the target

console.log(subArraysum(arr, t));
