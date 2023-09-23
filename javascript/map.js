// map
// map is data type which store key value pair in ordered location
// we can iterate the map by using for loop

const map = new Map([
  ["a", 1],
  ["b", 20],
  ["c", 50],
]);

// for adding key value pair in map

map.set(["d", 0.4]);

const mapentries = map.entries();
console.log(mapentries.next().value);
