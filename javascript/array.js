// array can be written in square brackets
// it index start from zero

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr methods

// adding element to the starting of array we use "UNSHIFT"

arr.unshift(0.3);

// adding element to the end we will use shift
// Appends new elements to the end of an array, and returns the new length of the array.

arr.push(500000);

// for removing last element form array

arr.pop();

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr.shift();

// // arr methods
//  map,filter,reduce,slice,splice and concat

// map method
// it will iterate the array and apply the function on the every element and return the new array

const maps = arr.map((item) => item * 3);

// filter method

// it will take the eack element in the array and performe the condition on each element if it is passed it will push in to the array else it wont push the element

const filters = arr.filter((item) => item % 2 === 0);

// reduce

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

const resuc = arr.reduce(function (total, item) {
  return total + item;
}, 0);

console.log(resuc);

// it will perform the call back function on every element in the array the return the callback function is the accumulated result
// parameters

// first two we will use 99% of thime
// 1)accumulator
// 2)array item
// 3)index
// 4)entire array

const animals = ["dog", "cat", "pig", "dog", "cat", "pig"];

var petCounts = animals.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);

const lions = {};
console.log(lions);

// slice method
// it wont alter the array it will create shallow copy of the array

const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

const sp1 = cities.slice(2);

const sp2 = cities.slice(1, 4);
console.log(sp2);
console.log(sp1);

// splice the array

// it will alter the array

const cities1 = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

const sp3 = cities1.splice(3);
const sp4 = cities1.splice(-2);
console.log(sp4);
console.log(sp3);

// Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
