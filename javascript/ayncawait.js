async function asyncawait() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const js = await data.json();

  console.log(data);
}

asyncawait();

console.log("hi ...........................");
