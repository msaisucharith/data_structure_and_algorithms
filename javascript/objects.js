// object is key value pair
// it is not iterable we can't use for loop on objects

// we can retrive data from objects by using dot or square brackets

const obj = {
  name: "sai",
  grade: "a++",
  type: "king",
  fun: function () {
    console.log(this.name);
  },
};

console.log(obj.name);

// we can retrive data by using dot and square brackets

console.log(obj["name"]);
console.log(obj.name);

// object methods /////////////////////////////////////////////////////
///////////////////////// 1)object.keys() 2)object.values() 3)object.entries() ////////////////////////////

// return all keys form the object
console.log(Object.keys(obj));

// return all values form the object
console.log(Object.values(obj));

// return the key value pair in the arr
console.log(Object.entries(obj));
